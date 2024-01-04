import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaLock,FaUser } from "react-icons/fa";

import './LoginForm.css'



const LoginForm = () => {
    const navigate=useNavigate();
    const signup=()=>{navigate("/signup")}
    const home=()=>{navigate("/home")}
    return (
        <div className='wrapper1'>
            <form action="">
                <h1>Login</h1>
                <h2>________________</h2>
                <div className="input-box">
                    <input type="text" placeholder='User id' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Stay Loged in</label>
                    <a href='#'>Forgot password?</a>
                </div>

                <button onClick={home} type="submit">Log in</button>
                <div className="register-link">
                    <p>Don't have an Account?
                    <a onClick={signup}> Register
                    </a>
                    </p>
                </div>
            </form>
        </div>

    );
};

export default LoginForm;