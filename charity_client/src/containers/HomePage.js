import React from "react";
import '../css/HomePage.css';
import {Link} from 'react-router-dom'
import UserMenu from "../components/UserMenu";

const HomePage = ({charity, allCharities, setCharity}) => {
  return ( 
    <div className="welcome-container">
      <div className="top">
        <div className="welcome-text">
          <h1>Welcome Message!</h1>
          <p>call to action subtitle</p>
        </div>

        <div className="button">
          <Link to="/activities">View All Activities</Link>
        </div> 
        <div>Change User:</div>
        <UserMenu currentCharity={charity} allCharities={allCharities} setCharity={setCharity}/>
      </div> 
        
    </div>
    );
  };
 

export default HomePage;
