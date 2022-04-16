import React from 'react';
import dinner1 from '../../../assets/images/dinner/dinner1.png';
import dinner2 from '../../../assets/images/dinner/dinner2.png';
import dinner3 from '../../../assets/images/dinner/dinner3.png';
import dinner4 from '../../../assets/images/dinner/dinner4.png';
import dinner5 from '../../../assets/images/dinner/dinner5.png';
import dinner6 from '../../../assets/images/dinner/dinner6.png';


const Dinner = () => {
    return (
        <div className='breakfast container'>
            <div className='card'>
                <img src={dinner1} alt="" />
                <h4>Healthy Meal Plan</h4>
                <p>How we dream about our future</p>
                <h2>$ 23.99</h2>
            </div>
            <div className='card'>
                <img src={dinner2} alt="" />
                <h4>Fried Chicken Bento</h4>
                <p>How we dream about our future</p>
                <h2>$ 9.99</h2>
            </div>
            <div className='card'>
                <img src={dinner3} alt="" />
                <h4>Tarragon-Rubbed-Salmon</h4>
                <p>How we dream about our future</p>
                <h2>$ 6.99</h2>
            </div>
            <div className='card'>
                <img src={dinner4} alt="" />
                <h4>Indian Lunch</h4>
                <p>How we dream about our future</p>
                <h2>$ 8.99</h2>
            </div>
            <div className='card'>
                <img src={dinner5} alt="" />
                <h4>Beef Steak</h4>
                <p>How we dream about our future</p>
                <h2>$ 15.99</h2>
            </div>
            <div className='card'>
                <img src={dinner6} alt="" />
                <h4>Honey-Soy-Glazed Salmon with Peppers</h4>
                <p>How we dream about our future</p>
                <h2>$ 7.99</h2>
            </div>
            
        </div>
    );
};

export default Dinner;