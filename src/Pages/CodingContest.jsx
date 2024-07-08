import React, { useState } from "react";
import Header from "../Components/Header";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-dracula";
import Editor from "../Components/Editor";
import Compiler from "../Components/Compiler";
import './CodingContest.css';
import Slide from "../Components/Slide";

const CodingContest = () => {
  const [shows,setshow] = useState(false);
  const [click,setclik] = useState(false);
  const [quesNo,setQuesNo] = useState(0)

  const handlechild = (data)=>{
    setshow(data);
  }
  const handlecompiler = (no,click)=>{
    setQuesNo(no);
    setclik(click);
    console.log(quesNo);
  }
    
  return (
    <div>
      <Header Title="Coding Contest"></Header>
      <div className="Contest">
          <div className="Question">
              <Slide parenetFunction={handlechild} secondparent={handlecompiler}/>
          </div>
          {click?<Compiler show={shows} no={quesNo}/>: <></>}
            {/* <Compiler show={shows}/> */}
            {/* <div className={`${!shows ? "startscreen":"off"}`}>
                <p> Welcome to the Coding Contest! 🎉 Get ready for challenging questions that push your coding skills to the limit. To begin, hit 'Start'. If you need to read a question, click the right arrow in the top left corner. Best of luck, and may the code be with you! 🚀</p>
            </div> */}
      </div>
    </div>
  );
};

export default CodingContest;
