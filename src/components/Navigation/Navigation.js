import React from 'react';
import icon from '../../assets/surprise.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="container">
            <div className="navBar">
                <div className="logo">
                    <img src={icon} alt="" />
                    <p>Giftly</p>
                </div>
                <nav className="navList">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="buttonList">
                    <button id='btn1'>Sign up</button>
                    <button id='btn2'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
