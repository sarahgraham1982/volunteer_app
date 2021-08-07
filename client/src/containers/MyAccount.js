import React from "react";
import {Link} from 'react-router-dom';

const MyAccount = () => {

  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/myrewards">My Rewards</Link>
          </li>
          <li>
            <Link to="/myactivities">My Activities</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div> 
    </> 
  )
};

export default MyAccount;