import React, { useEffect } from "react";
import './PicBtn.css'
import useUpdateUserData from "./UpdateComponent";



const PicBtn = ({ Path, selected, onClick }) =>{
    const updateUser = useUpdateUserData();

        const HandleUpdate =  ()=>{
            const path = Path;

            const data = {
                ProfilePic:path
            };
            updateUser(data);
        }

    return(
        <div className={`pic ${selected? "selected" : ""}`}>
            <img src={Path} className="pic" onClick={()=>{HandleUpdate();onClick()}}></img>
        </div>
    );
}

export default PicBtn;