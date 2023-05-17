import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/Login.style.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
        } else {
            navigate("/home");
        }
    };

    return (
        <div className="container">
            <form className="form-1" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="uname" value={username} onChange={handleUsernameChange} required />

                <label>
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={handlePasswordChange} required />

                <button className="button-login" type="submit">
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
