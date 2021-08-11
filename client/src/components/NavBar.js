import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { scaleDown as Menu } from 'react-burger-menu'
// import Link not adding and pushing for some weird reason


// const NavBar = () => {

//   return (
//     <div className="NavBar" id="MyNavBar">
//       <div class="NavBar" id="myNavBar">
//         <Link to="/">Home</Link>
//         <Link to="/activities">Give Your Time</Link>
//         <Link to="/rewards">Get Rewards</Link>
//         <Link to="/myaccount">My Account</Link>

//   < a href = "javascript:void(0);" class="icon" onclick = "myFunction()" >
//     <i class="fa fa-bars"></i>
//   </a >
// </div >
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/activities">Give Your Time</Link>
//     </li>
//     <li>
//       <Link to="/rewards">Get Rewards</Link>
//     </li>
//     <li>
//       <Link to="/myaccount">My Account</Link>
//     </li>
//   </ul> 
//  </div > 

//   );

// found online but not working! HELP
// function myFunction() {
//   var x = document.getElementById("myNavBar");
//   if (x.className === "NavBar") {
//     x.className += " responsive";
//   } else {
//     x.className = "NavBar";
//   }
// }

// }

const NavBar = () => {

  const showSettings = (e) => {
    e.preventDefault();
  }


  return (
    <Menu>
      <Link id="home" className="menu-item" to="/">Home</Link>
      <Link id="about" className="menu-item" to="/activities">Give Your Time</Link>
      <Link id="contact" className="menu-item" to="/myaccount">Account</Link>
      <Link id="contact" className="menu-item" to="/rewards">Rewards</Link>
    </Menu>
  );

}
export default NavBar;