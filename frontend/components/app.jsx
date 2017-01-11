import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <h1>SofaHopping</h1>
    <div>
      <Link to="/signup">Join</Link>
    </div>
    <div>
      <Link to="/login">Log In</Link>
    </div>

    <GreetingContainer />
    { children }
  </div>
);

export default App;
