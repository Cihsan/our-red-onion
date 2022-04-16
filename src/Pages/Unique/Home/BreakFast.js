import React from 'react';
import bf1 from '../../../assets/images/breakfast/breakfast1.png';
import bf2 from '../../../assets/images/breakfast/breakfast2.png';
import bf3 from '../../../assets/images/breakfast/breakfast3.png';
import bf4 from '../../../assets/images/breakfast/breakfast4.png';
import bf5 from '../../../assets/images/breakfast/breakfast5.png';
import bf6 from '../../../assets/images/breakfast/breakfast6.png';

const BreakFast = () => {
    return (
        <div className='breakfast container'>
            <div className='card'>
                <img src={bf1} alt="" />
                <h4>Healthy Meal Plan</h4>
                <p>How we dream about our future</p>
                <h2>$ 23.99</h2>
            </div>
            <div className='card'>
                <img src={bf2} alt="" />
                <h4>Fried Chicken Bento</h4>
                <p>How we dream about our future</p>
                <h2>$ 9.99</h2>
            </div>
            <div className='card'>
                <img src={bf3} alt="" />
                <h4>Tarragon-Rubbed-Salmon</h4>
                <p>How we dream about our future</p>
                <h2>$ 6.99</h2>
            </div>
            <div className='card'>
                <img src={bf4} alt="" />
                <h4>Indian Lunch</h4>
                <p>How we dream about our future</p>
                <h2>$ 8.99</h2>
            </div>
            <div className='card'>
                <img src={bf5} alt="" />
                <h4>Beef Steak</h4>
                <p>How we dream about our future</p>
                <h2>$ 15.99</h2>
            </div>
            <div className='card'>
                <img src={bf6} alt="" />
                <h4>Honey-Soy-Glazed Salmon with Peppers</h4>
                <p>How we dream about our future</p>
                <h2>$ 7.99</h2>
            </div>
            
        </div>
    );
};

export default BreakFast;