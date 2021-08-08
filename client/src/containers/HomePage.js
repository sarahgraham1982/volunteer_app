import React from "react";
import '../css/HomePage.css';
import welcome from './welcome.png';

const HomePage = () => {
  return ( 
    <div className="welcome-container">
         
      <div className="top">
        <div className="welcome-text">
          <h1>Welcome Message!</h1>
          <p>call to action subtitle</p>
        </div>

        <h1> search bar goes here </h1>

        <div className="button">
          <a href ="/activities">View All Activities</a>
        </div> 
      </div> 

      <div className="middle">
        <div className="welcome-image">
        <img src={welcome} alt="welcome" class="responsive" ></img>        
        </div> 
      </div>           
    </div>
    );
  };
 

export default HomePage;
