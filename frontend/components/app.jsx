import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = (props, { currentUser }) => {

  return (
    <div>
      <NavbarContainer />
      <div className="nav-blank-space"></div>
      {props.children}
    </div>
  );
};

export default App;
