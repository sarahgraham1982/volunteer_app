import React from 'react';
import '../css/NavBar.css';
import { Link } from "react-router-dom";


// const NavBar = () => {

//   return (
//     <div className="nav-bar" id="myNavBar">
      
//       <a href="/" class="active">Home</a>
//       <a href="/activities">Give Your Time</a>
//       <a href="/rewards">Get Rewards</a>
//       <a href="/myaccount">My Account</a>
            
//       <a href="javascript:void(0);" className="icon" onclick="myFunction()">
//         <i className="fa fa-bars"></i>
//     </a>
//   </div>
//   );


// function myFunction() {
//   var x = document.getElementById("myNavBar");
//   if (x.className === "nav-bar") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-bar";
//   }
// }

// }








const NavBar = () => {

  return (
    <div className="nav-container">
      <div className="nav-bar" id="myNavBar">
      
        <Link to="/" >Home</Link>
        <Link to="/activities">Give Your Time</Link>
        <Link to="/rewards">Get Rewards</Link>      
        <Link to="/myaccount">My Account</Link>
      </div>
    </div>
  );
}

export default NavBar;