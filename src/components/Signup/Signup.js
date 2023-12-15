import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import bg from './home-bg.png';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/panel/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const [width, setWidth] = useState(`40%`);
  const [height, setHeight] = useState(`100%`);
  const [top, setTop] = useState(`6%`);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  if (windowSize.current[0] <= 720) {
    setWidth(`80%`);
    setHeight(`auto`);
    setTop(`40px`)
  }


  const containerStyle = {
    width: `${width}`,
    border: `2px solid gray`,
    padding: `20px`,
    borderRadius: `20px`,
    background: `#f0f8ff36`,
    color: `black`,
    fontWeight: 800,
    backdropFilter: `blur(10px)`,
    position: `relative`,
    top: `${top}`
  }

  const homeS = {
    background: `url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    height: `auto`,
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100%`,
    height: `${height}`,
    zIndex: `-1`,
    display: `flex`,
    alignItems: `center`
  }

  return (
    <div className="home" style={homeS}>
      <div className='container my-5' style={containerStyle}>
        <form>
          <h4 style={{ textAlign: `center` }} className="my-2">Sign Up Form</h4>
          <div className="mb-3">
            <InputControl
              className="form-control"
              label="Name"
              placeholder="Enter User Name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <InputControl
              className="form-control"
              label="Email"
              placeholder="Enter Your Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
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
          <button disabled={submitButtonDisabled} onClick={handleSubmission} className="btn btn-primary my-4 mx-4">
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
