import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form >
            <input type="text" name="name" id="" placeholder='Name'/>
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="password" name="password" id="" placeholder='Password'/>
            <input type="password" name="password" id="" placeholder='Confirm Password'/>
            <input type="submit" value="Sign Up" />
            </form>
            <Link>Already have an account</Link>
        </div>
    );
};

export default SignUp;