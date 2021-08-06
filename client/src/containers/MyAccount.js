import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MyRewards from './MyRewards';
import MyActivities from './MyActivities';
import Profile from './Profile';


const MyAccount = () => {

  return (
    <>
      <Router>
        <Route path='/myaccount/rewards' component={MyRewards} />
        <Route path='/myaccount/activities' component={MyActivities} />
        <Route path='/myaccount/profile' component={Profile} />
      </Router>
      <div>
        <ul>
          <li>
            <Link to="/myaccount/rewards">My Rewards</Link>
          </li>
          <li>
            <Link to="/myaccount/activities">My Activities</Link>
          </li>
          <li>
            <Link to="/myaccount/profile">Profile</Link>
          </li>
        </ul>
      </div> 
    </> 
  )
};

export default MyAccount;