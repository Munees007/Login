import React, { useEffect } from "react";
import './Header.css'
import Profile from "./Profile";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";


const Header = (arg) =>{

    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                // User is not logged in, navigate to home page
                navigate('/');
                console.log("User not logged in");
            }
            // Clean up function
            return () => unsubscribe();
        });
    }); // Pass history object as a dependency


    return(
        <div className="Head">
            <p>{arg.Title}</p>
            <Profile></Profile>
        </div>
    );
}

export default Header;