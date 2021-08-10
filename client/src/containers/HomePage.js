import React from "react";
import '../css/HomePage.css';
import welcome from './welcome.png';
import UserMenu from "../components/UserMenu";


const HomePage = ({user, allUsers, setUser}) => {
  return ( 


    <div className="welcome-container">
      <div className="top">
        {/* <div className="welcome-text">
          
          <h2>A Thank You for Giving Back.</h2>
          <p>Get rewards for volunteering in your community</p>
        </div> */}

        <div className="button1">
          <a href ="/myaccount">Get Involved >></a>
        </div> 

        <div className="middle">
        <div className="welcome-image">
        <img src={welcome} alt="welcome" className="responsive" ></img>        
        </div> 
      </div>  

        <div className="button2">
          <a href ="/activities">View All Activities >></a>
        </div> 
        <div className="button3">
          <a href ="/rewards">View All Rewards >></a>
        </div>
      <div className="change-user"></div>
          <div>Change User:</div>
          <div className="change-user-content"></div>
          <UserMenu currentUser={user} allUsers={allUsers} setUser={setUser}/>
      </div>           
    </div>

    
    );
  };
 

export default HomePage;
