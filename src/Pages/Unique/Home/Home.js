import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='foods'>
                <Link className='btn' to='/home/breakfast'>Breakfast</Link>
                <Link className='btn' to='/home/lunch'>Lunch</Link>
                <Link className='btn' to='/home/dinner'>Dinner</Link>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Home;