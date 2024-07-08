import React, { useEffect } from "react";
import Header from "../Components/Header";
import './Home.css'
import 'typeface-roboto';
import {useNavigate} from 'react-router-dom'

const Home = () =>{

    const navi = useNavigate();
    const OnClickGo = (path)=>{
        navi(path);
    }


    return(
        <div className="Top">
            <Header Title ="Home" />
            <div className="Events">
                <div className="Event1 Event" onClick={()=>{OnClickGo('/codingcontest')}}>
                    <img src="./programming.png"></img>
                    <h1>CODING CONTEST</h1>
                </div>
                <div className="Event2 Event" onClick={()=>{OnClickGo('/design')}}>
                    <img src="./coming-soon.png"></img>
                    <h1>DESINGING</h1>
                </div>
                <div className="Event3 Event">
                    <img src="./coming-soon.png"></img>
                    
                </div>
                <div className="Event4 Event">
                    <img src="./coming-soon.png"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;