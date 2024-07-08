import React, { useState,useRef, useEffect } from "react";
import './Slide.css';
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';
import Question from "./Question";
import { questions} from'./q';
const Slide = ({parenetFunction,secondparent})=>{
    const [showSlide,SetshowSlide] = useState(false);
    const ques1="Trapping Rain Water: Given an array of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. For example, given [0,1,0,2,1,0,1,3,2,1,2,1], return 6 units of water can be trapped.";
    const btn = useRef(null);
    const [CurrentQuestion,SetCurrentQuestion] = useState('');
    const [numb,setno] = useState(null);
    const changepos = () =>{
        if (!showSlide && btn.current) {
            btn.current.style.marginLeft = '14.9rem';
        } else if (btn.current) {
            btn.current.style.marginLeft = '0rem';
        }
    } 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let m = 0;

      const HandleQuestion = (no,click)=>{
            setno(no);
            
            secondparent(no,click);
      }
      
      const OnOff = (No) =>{
        SetCurrentQuestion(No);
        console.log(CurrentQuestion);
      }

      useEffect(()=>{
        console.log(CurrentQuestion);
      },[CurrentQuestion])
     return(
        <div className="para">
           <button ref={btn} onClick={()=>{SetshowSlide(!showSlide);parenetFunction(!showSlide);changepos();}}>{!showSlide ? <IoIosArrowForward size={30}/> : <IoIosArrowBack size={30}/>}</button>
        <div className={`Slide ${showSlide ? "onslide":""}`}>
            <ul>
                <li><Question Question={questions[m].question1} no={"1"}  parentfun={HandleQuestion} QuestionNo={OnOff} IsVisible={CurrentQuestion==="1"}/></li>
                <li><Question Question={questions[m].question2} no={"2"}  parentfun={HandleQuestion} QuestionNo={OnOff} IsVisible={CurrentQuestion==="2"}/></li>
                <li><Question Question={questions[m].question3} no={"3"}  parentfun={HandleQuestion} QuestionNo={OnOff} IsVisible={CurrentQuestion==="3"}/></li>
                <li><Question Question={questions[m].question4} no={"4"}  parentfun={HandleQuestion} QuestionNo={OnOff} IsVisible={CurrentQuestion==="4"}/></li>
                <li><Question Question={questions[m].question5} no={"5"}  parentfun={HandleQuestion} QuestionNo={OnOff} IsVisible={CurrentQuestion==="5"}/></li>
            </ul>
            
        </div>
        
        </div>
    );
}

export default Slide;