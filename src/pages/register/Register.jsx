import "./register.css";

const Register = () => {
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
            <input type="text" placeholder="Username" className="logininput" />
            <input type="text" placeholder="Email" className="logininput" />
            <input type="text" placeholder="Password" className="logininput" />
            <input type="password" placeholder="Confirm Password" className="logininput" />
            <button className="loginbutton">Sign Up</button>
            <button className="loginregisterbutton">Login to Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
