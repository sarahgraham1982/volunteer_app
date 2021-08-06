import React from 'react';
import {Link} from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {

  return (
    <div className="NavBar" id="MyNavBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activity-search">Activity Search</Link>
          </li>
          <li>
            <Link to="/rewards">Rewards</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </ul>
    </div> 
  
  );


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNavBar");
  if (x.className === "NavBar") {
    x.className += " responsive";
  } else {
    x.className = "NavBar";
  }
}



}

export default NavBar;