import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Welcome, {currentUser.first_name} {currentUser.last_name}</h2>
    <button className="header-button" onClick={logout}>Log out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;
