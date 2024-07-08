import React from "react";
import './LoginPage.css'
import { useState } from "react";

function LoginPage({onLogin})
{
    const [Email,SetEmail] = useState('');
    const [Pass,SetPass] = useState('');

    const OnHandleState = (e) =>{
        e.preventDefault();
        onLogin(Email,Pass);
    }

    return(
        <div id="Login" className="Login">
            <h1>LOGIN</h1>
            <form className="LoginForm" onSubmit={OnHandleState}>
                <input type="text" name="Email" className="email" placeholder="Enter Your Email" value={Email} onChange={(e=>{
                    SetEmail(e.target.value);
                })}></input>
                <input type="password" name="Password" className="pass" placeholder="Enter Your Password" value={Pass} onChange={(e)=>{
                    SetPass(e.target.value);
                }}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;