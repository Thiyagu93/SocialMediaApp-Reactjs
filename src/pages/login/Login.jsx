import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h1 className="loginlogo">faceNote</h1>
          <span className="logindisc">
            Connect with the friends and the world around you on faceNote
          </span>
        </div>
        <div className="loginright">
          <div className="loginbox">
            <input type="text" placeholder="Email" className="logininput" />
            <input type="password" placeholder="Password" className="logininput" />
            <button className="loginbutton">Log In</button>
            <span className="loginforgotpassword">Forgot Password ?</span>
            <button className="loginregisterbutton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
