import React, { useState } from "react";
import logo from './logo/creative-clicks-logo.svg';

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="logo-div">
        <img src={logo} alt="logo of the pro"/>      
        <div className="auth-form-container">
            <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form"> 
            <label htmlFor="email">email </label>
            <input value={email} onChange= {(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email"/>
            <label htmlFor="password">password </label>
            <input value={password} onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
            <button type="submit">Log In </button>

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Sign_in')}> Don't have an account? Sign in here. </button>
        <button className="link-btn" onClick={() => window.location = "/ProfilePageOwnersView"}> Don't want to login? just check our website </button>
        </div>
        </div>

    )
}

export default Login
