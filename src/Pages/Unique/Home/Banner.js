import React from 'react';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='w'>
            <h1 className='text-center'>Best Food waiting for your belly</h1>
            <input type="search" name="search" id="search" placeholder='Search'/>
            <button>Search</button>
            </div>
            
        </div>
    );
};

export default Banner;