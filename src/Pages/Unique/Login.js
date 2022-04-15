import React from 'react';

const Login = () => {
    return (
        <div>
            <form >
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="password" name="password" id="" placeholder='Password'/>
            <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;