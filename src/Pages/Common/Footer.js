import React from 'react';
import logo from '../../assets/images/logo2.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
            <img src={logo} alt="" />
            <small>Copyright © 2023 Online food</small>
            </div>
            <div>
            About Online food
            Read our blog
            Sign up to deliver
            Add your restaurant
            </div>
            <div>
            Get help
            Read FAQs
            View all cities
            Restaurants near me
            </div>
            <div>
            Privacy Policy.
            Terms of Use
            Pricing
            </div>
        </div>
    );
};

export default Footer;