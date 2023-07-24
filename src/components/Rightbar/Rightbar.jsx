import React from "react";
import "./Rightbar.css";
import { Users } from "../../data";
import Online from "../Online/Online";

const Rightbar = ({profile}) => {
  const Homerightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img
            src="assets/gift.png "
            alt="birthdayimg"
            className="birthdayimage"
          />
          <span className="birthdaytext">
            <b>Jhon Mir</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="adimage" className="adimage" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className=" ">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };

  const Profilerightbar = () => {
    return (
      <div>
        <h1 className="rightbarinfotitle">This is profileright</h1>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">Chennai</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Avadi</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">RelationShip:</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbaruserfriends">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollingname">Randy Orten</span>
          </div>
          <div className="rightbarfolliwing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollingname">Randy Orten</span>
          </div>
          <div className="rightbarfolliwing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollingname">Randy Orten</span>
          </div>
          <div className="rightbarfolliwing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollingname">Randy Orten</span>
          </div>
          <div className="rightbarfolliwing">
            <img
              src="assets/person/7.jpeg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollingname">Randy Orten</span>
          </div>
          <div className="rightbarfolliwing">
            <img
              src="assets/person/9.jpeg"
              alt=""
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollingname">Randy Orten</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {profile ? <Profilerightbar /> : <Homerightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
