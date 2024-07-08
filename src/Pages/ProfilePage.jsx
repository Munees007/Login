import React, { useState } from "react";
import "./ProfilePage.css";
import Header from "../Components/Header";
import useFetchUserData from "../Components/FetchData";
import { InfoCircle, Brush } from "react-bootstrap-icons";
import PicBtn from "../Components/PicBtn";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const userData = useFetchUserData();

  const [IsAbout, SetIsAbout] = useState(true);
  const [IsApper, SetIsApper] = useState(false);
  const [selectedPic, setSelectedPic] = useState("");

  const AboutBtn = () => {
    SetIsAbout(true);
    SetIsApper(false);
  };

  const ApperBtn = () => {
    SetIsAbout(false);
    SetIsApper(true);
  };

  return (
    <div className="ProfilePage">
      <Header Title="PROFILE"></Header>
      <div className="Middle">
        <div className="SideBar">
          <ul>
            <li onClick={AboutBtn}>
              <InfoCircle size={30} className="icon" />
              About
            </li>
            <li onClick={ApperBtn}>
              <Brush size={30} className="icon" />
              Appearence
            </li>
          </ul>
        </div>
        <div className="Contents">
          <div className={IsAbout ? "ProfileInfo" : "Off"}>
            <img
              id="Pro"
              src={userData?.ProfilePic ? userData.ProfilePic : "/Pro.png"}
            ></img>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{userData?.name}</td>
                </tr>
                <tr>
                  <td>Roll</td>
                  <td>{userData?.roll}</td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>{userData?.Class}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userData?.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={IsApper ? "t" : "Off"}>
            <h1>Profile Pic</h1>
            <div className="apper">
              <PicBtn
                Path="/pic1.png"
                selected={
                  selectedPic === "/pic1.png" ||
                  userData?.ProfilePic == "/pic1.png"
                }
                onClick={() => setSelectedPic("/pic1.png")}
              />
              <PicBtn
                Path="/pic2.png"
                selected={
                  selectedPic === "/pic2.png" ||
                  userData?.ProfilePic == "/pic2.png"
                }
                onClick={() => setSelectedPic("/pic2.png")}
              />
              <PicBtn
                Path="/pic3.png"
                selected={
                  selectedPic === "/pic3.png" ||
                  userData?.ProfilePic == "/pic3.png"
                }
                onClick={() => setSelectedPic("/pic3.png")}
              />
              <PicBtn
                Path="/pic4.png"
                selected={
                  selectedPic === "/pic4.png" ||
                  userData?.ProfilePic == "/pic4.png"
                }
                onClick={() => setSelectedPic("/pic4.png")}
              />
              <PicBtn
                Path="/pic5.png"
                selected={
                  selectedPic === "/pic5.png" ||
                  userData?.ProfilePic == "/pic5.png"
                }
                onClick={() => setSelectedPic("/pic5.png")}
              />
              <PicBtn
                Path="/pic6.png"
                selected={
                  selectedPic === "/pic6.png" ||
                  userData?.ProfilePic == "/pic6.png"
                }
                onClick={() => setSelectedPic("/pic6.png")}
              />
              <PicBtn
                Path="/pic7.png"
                selected={
                  selectedPic === "/pic7.png" ||
                  userData?.ProfilePic == "/pic7.png"
                }
                onClick={() => setSelectedPic("/pic7.png")}
              />
              <PicBtn
                Path="/pic8.png"
                selected={
                  selectedPic === "/pic8.png" ||
                  userData?.ProfilePic == "/pic8.png"
                }
                onClick={() => setSelectedPic("/pic8.png")}
              />
              <PicBtn
                Path="/pic9.png"
                selected={
                  selectedPic === "/pic9.png" ||
                  userData?.ProfilePic == "/pic9.png"
                }
                onClick={() => setSelectedPic("/pic9.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
