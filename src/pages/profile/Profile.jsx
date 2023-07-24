import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
                <img src="assets/post/3.jpeg" alt="" className="profilecoverimage" />
                <img src="assets/person/7.jpeg" alt="" className="profileuserimage" />
            </div>
            <div className="profileinfo">
                <h4 className="profileinfoname">Thiyagu Ragu</h4>
                <span className="profileinfodesc">  Hello Guys!!!</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
