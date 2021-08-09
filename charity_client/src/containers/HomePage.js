import React from "react";
import '../css/HomePage.css';
import UserMenu from "../components/UserMenu";

const HomePage = ({charity, allCharities, setCharity}) => {
  return ( 
    <div className="welcome-container">
      <div className="top">
        <div className="welcome-text">
          <h1>Welcome Message!</h1>
          <p>call to action subtitle</p>
        </div>

        <div>Change User:</div>
        <UserMenu currentCharity={charity} allCharities={allCharities} setCharity={setCharity}/>
      </div> 
        
    </div>
    );
  };
 

export default HomePage;
