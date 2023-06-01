import React, {useState} from "react";
import Login from "./Login";
import Sign_in from "./Signin";

function LandingPage() {

    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
      setCurrentForm(formName);}
    return (
        <div>
            <form action="action_page.php" method="post">
                <div class="imgcontainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdO9zt6ZepfW2wO7UKVy3uJEITV0-cRjoRQ&usqp=CAU" alt="Avatar" class="avatar"></img>
                </div>

                <hr></hr>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"></input>
                    </label>
                </div>

                <div class="container" style={{ backgroundcolor: "#f1f1f1" }}>
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>

            <center>
                <div class="titlecontainer">
                    <h1>"Creative-Clicks"</h1>
                </div>
            </center>
            <div className="App">
                {
                    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Sign_in onFormSwitch={toggleForm} />
                }
            </div>
        </div>

    )
}

export default LandingPage