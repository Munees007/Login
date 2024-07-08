import React from "react";
import './SignInPage.css'
import { useState } from "react";

function SignInPage({OnSignIn}){

    const [Email,SetEmail] = useState('');
    const [Pass,SetPass] = useState('');
    const [Name,SetName] = useState('');
    const [Roll,SetRoll] = useState('');
    const [Class,SetClass] = useState('');

    const OnHandle = (e) =>{
        e.preventDefault();
        OnSignIn(Email,Pass,Name,Roll,Class);
        SetEmail('');
        SetPass('');
        SetName('');
        SetRoll('');
        SetClass('');
    }

    return(
        <div id="SignIn" className="SignIn">
        <h1>SIGN IN</h1>
        <form className="SignInForm" onSubmit={OnHandle}>
            <input type="text" name="Name" className="name" required placeholder="Enter Your Name" value={Name} onChange={(e)=>{
                SetName(e.target.value);
            }}></input>
            <input type="text" name="Roll" className="roll" required placeholder="Enter Your Roll No" value={Roll} onChange={(e)=>{
                SetRoll(e.target.value);
            }}></input>
            <input type="text" name="Class" className="class" required placeholder="Enter Your Class" value={Class} onChange={(e)=>{
                SetClass(e.target.value);
            }}></input>
            <input type="text" name="Email" className="email" required placeholder="Enter Your Email" value={Email} onChange={(e)=>{
                SetEmail(e.target.value);
            }}></input>
            <input type="password" name="Password" className="pass" required placeholder="Enter Your Password" value={Pass} onChange={(e)=>{
                SetPass(e.target.value);
            }}></input>
            <button type="submit">Sign In</button>
        </form>
    </div>
    );
}

export default SignInPage;