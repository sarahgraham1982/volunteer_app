import React from 'react';
import '../css/Header.css';
import logo from './logo.png';

const Header = () => {
    return (
        <div className="header-image">
            <img src={logo} alt="Logo"></img>
        </div> 
    )

}

export default Header;