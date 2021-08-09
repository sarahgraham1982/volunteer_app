import React from "react";
import '../css/HomePage.css';
import welcome from './welcome.png';
import UserMenu from "../components/UserMenu";

const HomePage = ({user, allUsers, setUser}) => {
  return ( 
    <div className="welcome-container">
      <div className="top">
        <div className="welcome-text">
          <h1>Giving back for Giving back.</h1>
          <p>Get rewards for volunteering in your community</p>
        </div>

        <div className="button1">
          <a href ="/activities">View All Activities</a>
        </div> 
        <div>Change User:</div>
        <UserMenu currentUser={user} allUsers={allUsers} setUser={setUser}/>
      </div> 

      <div className="middle">
        <div className="welcome-image">
        <img src={welcome} alt="welcome" className="responsive" ></img>        
        </div> 
      </div>           
    </div>
    );
  };
 

export default HomePage;
