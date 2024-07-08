import "./App.css";
import React from "react";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import FinalAuthPage from "./Pages/FinalAuthPage";
import { ToastIcon, Toaster } from "react-hot-toast";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import Home from "./Pages/Home";
import CodingContest from "./Pages/CodingContest";
import Design from "./Pages/Design";

function App() {
  return (
    <Router>
      <div className="Parent">
        <Routes>
          <Route path="/" element={<FinalAuthPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/codingcontest" element={<CodingContest/>}/>
          <Route path="/design" element={<Design/>}/>
        </Routes>
        <Toaster position="top-center"></Toaster>
      </div>
    </Router>
  );
}

export default App;
