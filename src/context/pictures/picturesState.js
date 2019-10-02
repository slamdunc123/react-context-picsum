import React, { useState, useEffect } from 'react';
import PicturesContext from './picturesContext';
import axios from 'axios';

const PicturesState = props => {
  //   const initialState = {
  //     pictures: []
  //   };

  const [pictures, setPictures] = useState([]);
  const [test, setTest] = useState({ test: '' });
  console.log(pictures);

  const picturesURL = 'https://picsum.photos/v2/list';

  useEffect(() => {
    // useEffect like componentDidMount - runs the getPosts function from PostsState via postsContext

    // crud functions called from within components

    // get posts
    const getPictures = async () => {
      try {
        const res = await axios.get(picturesURL, {
          headers: {}
        });

        console.log(res.data);
        await setPictures(res.data);
        setTest({ test: 'test' });
        // setTest({ pictures: 'pictures' });
        //   axios
        //     .get(picturesURL)
        //     .then(response => setPictures({ pictures: response.data }))
        //     .then();
      } catch (err) {
        //   dispatch({
        //     type: CONTACT_ERROR,
        //     payload: err.response.msg
        //   });
      }
      // };
      // eslint-disable-next-line
    };
    getPictures();
  }, []);

  console.log(pictures);

  return (
    <PicturesContext.Provider value={{ pictures: pictures, test: test }}>
      {props.children}
    </PicturesContext.Provider>
  );
};

export default PicturesState;
