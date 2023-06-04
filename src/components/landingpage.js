import React, {useState} from "react";
import Login from "./Login";
import Sign_in from "./Signin";

function Landingpage() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
      setCurrentForm(formName);}
    return(

        <div className="App">
        {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Sign_in onFormSwitch={toggleForm} />
        }
    </div>

    )
}

export default Landingpage