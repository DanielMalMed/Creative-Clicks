import React, { useState } from "react";
import countryList from "react-select-country-list";
import logo from "./logo/creative-clicks-logo.svg";

function Sign_in (props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [Birthdate, setBirthdate] = useState('');
    const [location, setLocation] = useState('');
    const options = (countryList().getData(), [])
    const [phone_number , setPhone] =useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="logo-div">
            <img src={logo} alt="logo of the project"/>
        <div className="auth-form-container">
                <h2>SignIn</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                        <label htmlFor="name"> Full name </label>
                        <input value={name} onChange={(e) => setName (e.target.value)} name="name" id="name" placeholder="full name"/>
                        <label htmlFor="email">email </label>
                        <input value={email} onChange= {(e) => setEmail (e.target.value)} type="email" name="email"/>
                        <label htmlFor="birthdate"> birthdate</label>
                        <input type="date" value={Birthdate} onChange={(e) => setBirthdate (e.target.value)} name="Birthdate" id="birhtdate"/>
                        <label htmlFor="gender">gender</label>
                        <select className="Gender" onChange={(e) => setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="decline to say">decline to say</option>
                        </select>
                        <label htmlFor="phone_number"> phone number</label>
                        <input type="number" value={phone_number} onChange={(e) => setPhone (e.target.value)} name="phone_number" id="phone_number"/>
                        <label htmlFor="location"> select location</label>
                        <select options={options} value={location} onChange={(changeHandler) => setLocation (changeHandler.target.value)}/>
                        <label htmlFor="password">password </label>
                        <input value={pass} onChange={(e) => setPass (e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
                        <input type="checkbox" /> <span>Agree with terms and conditions.</span>
                        <button type="submit"> Sign In</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Alredy have an account? Login in here. </button>
        </div>
        </div>
    )
}

export default Sign_in