import React from 'react';
import PicturesState from './context/pictures/picturesState';
import './App.css';

import Pictures from './components/pages/Pictures';

function App() {
  return (
    <div className='App'>
      <PicturesState>
        <Pictures />
      </PicturesState>
    </div>
  );
}

export default App;
