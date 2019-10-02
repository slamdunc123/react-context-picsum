import React, { useContext } from 'react';
import PicturesContext from '../../context/pictures/picturesContext';

const Pictures = () => {
  const picturesContext = useContext(PicturesContext);
  const { pictures, test } = picturesContext;
  console.log(pictures);
  console.log(test);
  return (
    <div>
      Pictures
      {/* {test.test}
      {pictures.pictures} */}
      {pictures !== null ? (
        <div>
          {pictures.length}
          {pictures.map(picture => (
            <div key={picture.id}>
              {picture.id} - {picture.author} - {picture.url}
            </div>
          ))}
        </div>
      ) : (
        <div>no posts</div>
      )}
    </div>
  );
};

export default Pictures;
