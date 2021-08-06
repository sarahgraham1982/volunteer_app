import React from "react";
import '../css/HomePage.css';
import welcome from './welcome.png';

const HomePage = () => {
  return ( 
    <div className="welcome-container">
         
      <div className="top">
        <div className="welcome-text">
          <h1>Welcome!</h1>
          <p>to our new volunteering app!</p>
        </div>

        <div className="button">
          <a href ="/projects">View Activities</a>
        </div> 
      </div> 

      <div className="middle">
        <div className="image">
        <img src={welcome} alt="welcome"></img>        
        </div> 
      </div>           
    </div>
    );
  };
 

export default HomePage;
