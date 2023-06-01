import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import {Login} from "./components/Login";
import {Sign_in} from "./components/Signin";
import Homepage from './components/homepage';
import LandingPage from './components/landingpage';
import Tpostcreate from './components/tpostcreate';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Sign_in onFormSwitch={toggleForm}/>
      }
    </div>
    
  );
}

export default App;
