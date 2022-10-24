import React from 'react';
import AppLogo from '../images/reactlogo.png'
export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="brand">
                <img src={AppLogo} alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <p>React Course - Project 1</p>
        </nav>
    );
}