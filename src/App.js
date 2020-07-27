import React from 'react';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <div className="App">
      <RecoilRoot><LandingPage/></RecoilRoot>
    </div>
  );
}

export default App;
