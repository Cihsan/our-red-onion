import React from 'react';

const SignUp = () => {
    return (
        <div className='w signup'>
            <form >
            <input type="text" name="name" id="" placeholder='Name'/>
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="password" name="password" id="" placeholder='Password'/>
            <input type="password" name="password" id="" placeholder='Confirm Password'/><br />
            <input type="submit" value="Sign Up" />
            <p>Already have an account</p>
            </form>
            
        </div>
    );
};

export default SignUp;