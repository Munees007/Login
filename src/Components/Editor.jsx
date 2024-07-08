import React, { useState,useRef, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "./themes";
import "./languages";
import "./Editor.css";
import DropDownComponent from "./DropDownComponent";

const Editor = ({ executeRun, Result ,showslide,fun}) => {
  const [theme, SetTheme] = useState("");
  const [language, Setlanguage] = useState("");
  const [code, SetCode] = useState("");
  const Overall = useRef(null);
  const [divWidth,setdivWidth] = useState(1000);
  const handleSelect = (value) => {
    console.log("Selected:", value);
    SetTheme(value);
    // Do something with the selected value
  };
  const RunClick = () => {
    console.log("CLicked");
    executeRun(code, language, "main" + ChooseExtension(language));
  };
  const Handlelanguage = (data) => {
    Setlanguage(data);
  };

  const ChooseExtension = () => {
    if (language === "c") {
      return ".c";
    }
    else if (language === "cpp") {
      return ".cpp";
    }
    else if (language === "python") {
      return ".py";
    }
    else if (language === "java") {
      return ".java";
    }
    else if (language === "javascript") {
      return ".js";
    }
    else if (language === "csharp") {
      return ".cs";
    }
    else
    {
      return ".c";
    }
  };
  const options = [
    { label: "Twilight", value: "twilight" },
    { label: "Clouds", value: "clouds" },
    { label: "Dawn", value: "dawn" },
    { label: "Dracula", value: "dracula" },
    { label: "Ambiance", value: "ambiance" },
    { label: "DreamWeaver", value: "dreamweaver" },
    { label: "Chaos", value: "chaos" },
    { label: "Cobalt", value: "cobalt" },
    { label: "Eclipse", value: "eclipse" },
    { label: "GruvBox", value: "gruvbox" },
    { label: "Gob", value: "gob" },
    { label: "Monokai", value: "monokai" },
  ];
  const languages = [
    { label: "C", value: "c" },
    { label: "C++", value: "cpp" },
    { label: "Java", value: "java" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "JavaScript", value: "javascript" },
  ];
  
  useEffect(()=>{
    const handleresize = ()=>{
      if(Overall.current)
      {
          const Width = Overall.current.clientWidth;
          setdivWidth(Width);
          console.log(Width);
      }
        
      handleresize();
        window.addEventListener('resize',handleresize);

        return()=>window.removeEventListener('resize',handleresize);
    }
  },[])
  return (
    <div className="Overall" ref={Overall} onClick={()=>{console.log(divWidth)}}>
      <div className="buttons">
        <DropDownComponent
          options={options}
          onSelect={handleSelect}
          condition={"Theme"}
        />
        <DropDownComponent
          options={languages}
          onSelect={Handlelanguage}
          condition={"Language"}
          theme={theme}
        />
        <button
          onClick={RunClick}
          className={`Btn ${theme !== "" ? "ace-" + theme : "ace-twilight"}`}
        >
          Run
        </button>
        <button
          className={`Btn ${theme !== "" ? "ace-" + theme : "ace-twilight"}`}
        >
          Save
        </button>
        <h1 className={theme !=="" ? "ace-" + theme : "ace-twilight"}>Question{fun()}</h1>
      </div>
      <div className="Editor">
        <div className="aceEditor">
          <AceEditor
            mode={language === ("c" || "cpp") ? "c_cpp" : language}
            theme={theme !== "" ? theme : "twilight"}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            width={showslide ? "30rem" : "45rem"}
            showPrintMargin={false}
            fontSize={20}
            onChange={(e) => {
              SetCode(e);
            }}
          />
        </div>
        <div
          className={`Output ${theme !== "" ? "ace-" + theme : "ace-twilight"}`}
        >
          <h1>Output:</h1>
          <p>{Result?.result?.output}</p>
        </div>
      </div>
    </div>
  );
};

export default Editor;
