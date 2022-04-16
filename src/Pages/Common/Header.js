import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png'
const Header = () => {
    return (
        <div className='d-flex container'>
            <img src={logo} alt="" />
            <div>
                <NavLink className='btn' to="/home">Home</NavLink>
                <NavLink className='btn' to="/cart">Cart</NavLink>
                <NavLink className='btn' to="/login">Login</NavLink>
                <NavLink className='btn' to="/sign-up">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Header;