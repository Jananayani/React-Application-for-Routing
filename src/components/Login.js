import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.style.css'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <form className="form-1">
                <h1>Login</h1>
                <label>
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label>
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <p>Forgot Password?</p>
                <button className="button-login"
                    type="submit"
                    onClick={() => {
                        navigate("/home");
                    }}
                >
                    Log in
                </button>
                
            </form>
        </div>
    );
};
export default Login;
