import React from 'react';
// import {Link} from 'react-router-dom';
import '../css/NavBar.css';





const NavBar = () => {

  return (
    <div className="NavBar" id="MyNavBar">
      <div class="NavBar" id="myNavBar">
    <a href="/" class="active">Home</a>
    <a href="/activities">Give Your Time</a>
    <a href="/rewards">Get Rewards</a>
    <a href="/myaccount">My Account</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
  </a>
</div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activities">Give Your Time</Link>
          </li>
          <li>
            <Link to="/rewards">Get Rewards</Link>
          </li>
          <li>
            <Link to="/myaccount">My Account</Link>
          </li>
        </ul> */}
    </div> 
  
  );


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