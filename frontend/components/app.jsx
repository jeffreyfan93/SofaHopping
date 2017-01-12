import React from 'react';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>


    <NavbarContainer />
    <SplashContainer />
    {children}
  </div>
);

export default App;
