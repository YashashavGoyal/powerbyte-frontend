import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import bg from "./home-bg.png";
import './Login.module.css'

function Login() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/panel/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
    };
    
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    let width = (windowSize.current[0] <= 720)?`80%`:`40%`;
  
    const containerStyle = {
      width: `${width}`,
      border: `2px solid gray`,
      padding: `20px`,
      borderRadius: `20px`,
      background: `#f0f8ff36`,
      color: `black`,
      fontWeight: 800,
      backdropFilter: `blur(10px)`,
  }

  const homeS = {
    background: `url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    height: `100%`,
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100%`,
    zIndex: `-1`,
    display: `flex`,
    alignItems: `center`
  }

  const button = {
    border: `none`,
    textDecoration: `none`,
    color: `black`,
    padding: `10px 20px`,
    background: `#022bff`,
    color:`white`,
    borderRadius: `10px`
  }

  return (
    <div className="home" style={homeS}>
      <div className='container my-5' style={containerStyle}>

        <form>
          <h4 style={{ textAlign: `center` }} className="my-2">Login Form</h4>
          <div className="mb-3">
            <InputControl
              className="form-control"
              label="Email"
              placeholder="Enter Your Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            {/* <div id="emailHelp" className="form-text" style={{color:`green`}}>We'll never share your phone number with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <InputControl
              className="form-control" id="exampleInputPassword1"
              label="Password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
          </div>
        </form>
        <div>
          <b>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission} style={button}>
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup" style={{color: `blue`}}>Sign up</Link>
            </span>
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
