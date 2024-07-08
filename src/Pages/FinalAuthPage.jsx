import React, { useEffect } from "react";
import "./FinalAuthPage.css";
import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";
import { useState } from "react";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {app,database}from "../firebase";
import {collection , setDoc,doc} from 'firebase/firestore'
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate} from 'react-router-dom';
import { addDocToRealtimeDB } from "../Components/AddData";


const auth = getAuth(app);

function FinalAuthPage() {

  const [CurrentComponent,SetCurrentComponent] = useState("Login");
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const EnableComponent = (str)=>
  {
    SetCurrentComponent(str);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, redirect to header page
        if(localStorage.getItem('IsLoggedIn')==='true')
        {
            navigate('/home');
        }
        //console.log(user.uid);
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  const HandleSingIn = async (Email,Pass,Name,Roll,Class) =>{
    try{
      const userCredential = await createUserWithEmailAndPassword(auth,Email,Pass,Name,Roll,Class);
      const user = userCredential.user;
      //const url = 'https://debugging-ff1c7-default-rtdb.asia-southeast1.firebasedatabase.app/';
      const newDocKey = await addDocToRealtimeDB("users",user.uid,{
        uid:user.uid,
        name:Name,
        roll:Roll,
        Class:Class,
        email:Email
      });
      console.log("Document added with key:", newDocKey);
      toast.success('Account Created Successfully');
    }
    catch(error)
    {
      console.log(error.code);
      switch (error.code) {
        case 'auth/user-not-found':
          toast.error('User not found. Please check your email.');
          break;
        case 'auth/wrong-password':
          toast.error('Invalid password. Please try again.');
          break;
        case 'auth/invalid-email':
          toast.error('Invalid email address.');
          break;
        case 'auth/invalid-credential':
          toast.error('invalid credentials');
          break;
        case 'auth/too-many-requests':
          toast.error('Too many Trys , Please try again later');
          break;
        case 'auth/missing-password':
          toast.error('Please Enter Password');
          break;
        case 'auth/weak-password':
          toast.error('Password Must me atleast 6 characters length');
          break;
        case 'auth/email-already-in-use':
          toast.error('User account already availabe , try login');
          break;
        default:
          toast.error('An error occurred. Please try again later.');
          break;
      }
    }
  }

  const HandleLogin = async (Email,Pass) =>{
    try{
      const userCredential = await signInWithEmailAndPassword(auth,Email,Pass);
      localStorage.setItem('IsLoggedIn','true');
      toast.success('Login successful')
      navigate('/home');
    }
    catch(error)
    {
      console.error(error);
      switch (error.code) {
        case 'auth/user-not-found':
          toast.error('User not found. Please check your email.');
          break;
        case 'auth/wrong-password':
          toast.error('Invalid password. Please try again.');
          break;
        case 'auth/invalid-email':
          toast.error('Invalid email address.');
          break;
        case 'auth/invalid-credential':
          toast.error('invalid credentials');
          break;
        case 'auth/too-many-requests':
          toast.error('Too many Trys , Please try again later');
          break;
        case 'auth/missing-password':
          toast.error('Please Enter Password');
          break;
        case 'auth/weak-password':
            toast.error('Password Must me atleast 6 characters length');
            break;
        default:
          toast.error('An error occurred. Please try again later.');
          break;
      }
    }
  }

  return (
    <div className="CenterDiv">
    <div className="BackGround">
      <div className="First">
        <img src="/debug.jpg"></img>
      </div>
      <div className="Second">
        {/* <LoginPage></LoginPage>
        <SignInPage></SignInPage> */}
        
        {CurrentComponent === "Login" ? <LoginPage onLogin={HandleLogin}/> : <SignInPage OnSignIn={HandleSingIn}/>}
        {CurrentComponent !=="Login" &&(  <a href="#" onClick={()=>{
            EnableComponent("Login")
        }} className={CurrentComponent === "Login" ? "Login" : ""}>Already have an account?</a>)}

        {CurrentComponent !=="SignIn" && (<a href="#" onClick={()=>{
          EnableComponent("SignIn")
        }} className={CurrentComponent ==="SignIn" ? "SignIn":"" }>Doesn't have an account?</a>)}
      </div>
    </div>
    </div>
  );
}

export default FinalAuthPage;
