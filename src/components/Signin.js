import React, { useState } from "react";
import logo from "./logo/creative-clicks-logo.svg";
import { useSignup} from "../hook/useSignup"


function Sign_in (props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        await signup(username, email, password)
    }
    return (
        <div className="logo-div">
            <img src={logo} alt="logo of the project"/>
        <div className="auth-form-container">
                <h2>SignIn</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <label htmlFor="username"> Full username </label>
                    <input value={username} onChange={(e) => setUsername (e.target.value)} username="username" id="username" placeholder="full username"/>
                    <label htmlFor="email">email </label>
                    <input value={email} onChange= {(e) => setEmail (e.target.value)} type="email" username="email"/>
                    <label htmlFor="password">password </label>
                    <input value={password} onChange={(e) => setPassword (e.target.value)} type="password" placeholder="***********" id="password" username="password"/>
                    <button type="submit" disabled={isLoading}> Sign In</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Alredy have an account? Login in here. </button>
            {error && <div>{error}</div>}
        </div>
        </div>
    )
}

export default Sign_in