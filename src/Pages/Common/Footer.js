import React from 'react';
import logo from '../../assets/images/logo2.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
            <img src={logo} alt="" />
            
            </div>
            <div className="flex">
                <div>
                    <p>About Online food</p>
                    <p>Read our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div>
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>

                </div>
            </div>
            <div className='d-flex2'>
                <p>Privacy Policy.</p>
                <p>Terms of Use</p>
                <p>Pricing</p>
            </div>
            <small>Copyright © 2023 Online food</small>
        </div>
    );
};

export default Footer;