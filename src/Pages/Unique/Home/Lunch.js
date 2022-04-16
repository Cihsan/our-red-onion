import React from 'react';
import lunch1 from '../../../assets/images/lunch/lunch1.png';
import lunch2 from '../../../assets/images/lunch/lunch2.png';
import lunch3 from '../../../assets/images/lunch/lunch3.png';
import lunch4 from '../../../assets/images/lunch/lunch4.png';
import lunch5 from '../../../assets/images/lunch/lunch5.png';
import lunch6 from '../../../assets/images/lunch/lunch6.png';


const Lunch = () => {
    return (
        <div className='breakfast container'>
            <div className='card'>
                <img src={lunch1} alt="" />
                <h4>Healthy Meal Plan</h4>
                <p>How we dream about our future</p>
                <h2>$ 23.99</h2>
            </div>
            <div className='card'>
                <img src={lunch2} alt="" />
                <h4>Fried Chicken Bento</h4>
                <p>How we dream about our future</p>
                <h2>$ 9.99</h2>
            </div>
            <div className='card'>
                <img src={lunch3} alt="" />
                <h4>Tarragon-Rubbed-Salmon</h4>
                <p>How we dream about our future</p>
                <h2>$ 6.99</h2>
            </div>
            <div className='card'>
                <img src={lunch4} alt="" />
                <h4>Indian Lunch</h4>
                <p>How we dream about our future</p>
                <h2>$ 8.99</h2>
            </div>
            <div className='card'>
                <img src={lunch5} alt="" />
                <h4>Beef Steak</h4>
                <p>How we dream about our future</p>
                <h2>$ 15.99</h2>
            </div>
            <div className='card'>
                <img src={lunch6} alt="" />
                <h4>Honey-Soy-Glazed Salmon with Peppers</h4>
                <p>How we dream about our future</p>
                <h2>$ 7.99</h2>
            </div>
            
        </div>
    );
};

export default Lunch;