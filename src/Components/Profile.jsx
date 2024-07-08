import React from "react";
import { useState,useEffect } from "react";
import {app,db,auth}from "../firebase";
import './Profile.css'
import {signOut} from 'firebase/auth'
import {FaUser,FaSignInAlt,FaChartBar,FaHome} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {toast} from 'react-hot-toast'
import useFetchUserData from "./FetchData";

const Profile = () =>{
    
    const navigate= useNavigate();
    const [isPic,SetisPic] = useState(false);

    const HandleLogOut = async () =>{
        try{
            await signOut(auth);
            navigate('/');
            localStorage.setItem('IsLoggedIn','false');
            toast.success('Signed OUt Successfully');
        }
        catch(error){
            console.log(error.code);
        }
    }

    const userData = useFetchUserData();
    
    return(
        <div className="Profile" >
            <img src={userData?.ProfilePic ? userData?.ProfilePic : "/Pro.png" }></img>
            <div className="drop">
                <ul>
                    <li><Link to="/profile"><FaUser size={30} className="icon"/>Profile</Link></li>
                    <li><Link to="/profile"><FaChartBar  size={30} className="icon"/>DashBoard</Link></li>
                    <li><Link to="/home"><FaHome size={30} className="icon"/>Home</Link></li>
                    <li><Link to="/" onClick={HandleLogOut}><FaSignInAlt size={30} className="icon"/>LOG OUT</Link></li>
                </ul>
            </div>

        </div>
    );
}

export default Profile;