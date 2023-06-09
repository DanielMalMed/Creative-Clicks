import React, { useState } from "react";
import logo from "./logo/creative-clicks-logo.svg";
import { useSignup} from "../hook/useSignup"


function Sign_in (props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [Birthdate, setBirthdate] = useState('');
    const [phone_number , setPhone] =useState('');
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        await signup(username, email, password)
        window.location = '/'
    }
    return (
        <div className="logo-div">
            <img src={logo} alt="logo of the project"/>
        <div className="auth-form-container">
                <h2>Sign Up</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <label htmlFor="username"> Full username </label>
                    <input value={username} onChange={(e) => setUsername (e.target.value)} username="username" id="username" placeholder="full username"/>
                    <label htmlFor="email">email </label>
                    <input value={email} onChange= {(e) => setEmail (e.target.value)} type="email" username="email"/>
                    <label htmlFor="password">password </label>
                    <input value={password} onChange={(e) => setPassword (e.target.value)} type="password" placeholder="***********" id="password" username="password"/>
                    <label htmlFor="birthdate"> birthdate</label>
                    <input type="date" value={Birthdate} onChange={(e) => setBirthdate (e.target.value)} name="Birthdate" id="birhtdate"/>
                    <label htmlFor="phone_number">phone number </label>
                    <input value={phone_number} onChange={(e) => setPhone (e.target.value)} username="phone_number" id="phone_number"/>
                    <label htmlFor="gender">gender</label>
                        <select className="Gender" onChange={(e) => setGender(e.target.value)}>
                            <option value="decline to say">decline to say </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="checkbox" /> <span>Agree with terms and conditions.</span>
                    <button type="submit" disabled={isLoading}> Sign Up</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Alredy have an account? Login in here. </button>
            {error && <div>{error}</div>}
        </div>
        </div>
    )
}

export default Sign_in