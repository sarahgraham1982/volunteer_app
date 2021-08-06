import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>Other Links</li>
    </ul>
  );

}

export default NavBar;