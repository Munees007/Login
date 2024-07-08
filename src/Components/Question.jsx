import React, { useEffect, useState } from "react";
import { LuFileTerminal } from "react-icons/lu";
import './Question.css';

const Question = ({Question,no,parentfun,QuestionNo,IsVisible}) =>{
    const [visibleques,setVisibleQues] = useState(false);
    const btnDetails=()=>{
        parentfun(no,true);
    }
    useEffect(()=>{
        console.log(IsVisible + no);
    },[IsVisible])
    return(
        <div  className="Ques">
            <h3 onClick={()=>{QuestionNo(no);}}>Question{" "+no}</h3>
            <div className={`ques ${IsVisible ? "on" : ""}`}>
                <p>{Question}</p>
                <button title="Start Coding" onClick={btnDetails}><LuFileTerminal size={30} /></button>
            </div>

        </div>
    );
}

export default Question;