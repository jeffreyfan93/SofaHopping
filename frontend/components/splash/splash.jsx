import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Welcome, {currentUser.first_name} {currentUser.last_name}</h2>
  </hgroup>
);

const splash = () => (
  <div className="splash-container">
      <div className="splash-text-box">
        <div className="splash-text-1">
          Stay with Locals and Meet Travelers
        </div>
        <div className="splash-text-2">
          Share Authentic Travel Experiences
        </div>
      </div>
  </div>
);

const Splash = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : splash()
);

export default Splash;
