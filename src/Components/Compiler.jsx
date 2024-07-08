
import React, { useRef, useEffect, useState } from "react";
import './Compiler.css'
import Editor from "./Editor";

const Compiler = ({show,no}) => {
  const iFrameRef = useRef(null);
  const [result,setResult] = useState(null);
  const [IsCodeChanged,SetCodeChanged] = useState(false);
  const [number,setnum] = useState(null);

  const ExecuteCode =  (code, language, file) => {
    const iFrame = iFrameRef.current;
    iFrame.contentWindow.postMessage(
      {
        eventType: "populateCode",
        language: language,
        files: [
          {
            name: file,
            content: code,
          },
        ],
      },
      "*"
    );
    SetCodeChanged(true);
    console.log('code changed successfully');
    console.log(language);
    console.log(code);
  };
  const TriggerRun = () => {
    const iFrame = iFrameRef.current;
    if (iFrame) {
      iFrame.contentWindow.postMessage(
        {
          eventType: "triggerRun",
        },
        "*"
      );
    }
  };
  useEffect(() => {
    const Handle = (e) => {
      if (e.data && e.data.language) {
        //console.log(e.data.result.output);
        setResult(e.data);
        //console.log(result);
        SetCodeChanged(false);
        //SetCodeChanged(false);
      }
    };
    window.addEventListener("message", Handle);
    return () => {
      window.removeEventListener("message", Handle);
    };
  },[]);

  useEffect(()=>{
  if(IsCodeChanged)
    {
    TriggerRun();
    console.log('triggered');
    }
    
  },[IsCodeChanged])

  useEffect(() => {
    //console.log(result);
  }, [result,number]);

  const handleNumber = ()=>{
    setnum(no);
    return number;
  }
  return (
    <div className="cmp">
    <iframe
      ref={iFrameRef}
      frameBorder="0"
      height="450px"
      src="https://onecompiler.com/embed/python?codeChangeEvent=true&listenToEvents=true&theme=dark"
      width="100%"
      className="iframe"
    ></iframe>
    <Editor executeRun={ExecuteCode} Result={result} showslide={show} fun={handleNumber}/>
    </div>
  );
};

export default Compiler;
