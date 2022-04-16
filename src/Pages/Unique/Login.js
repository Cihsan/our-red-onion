import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    /* form connect with function */
    const getEmail=(e)=>{
        setEmail(e.target.value);
    }
    const getPassword=(e)=>{
        setPassword(e.target.value);
    }
    const getForm=(e)=>{
        e.preventDefault();
        console.log(email,password);
    }
    return (
        <div className='w login'>
            <form onSubmit={getForm}>
            <input onBlur={getEmail} type="email" name="email" id="" placeholder='Email' />
            <input onBlur={getPassword} type="password" name="password" id="" placeholder='Password'/><br />
            <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;