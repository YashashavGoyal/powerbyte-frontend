import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import InputControl from '../InputControl/InputControl';
import { auth } from '../../firebase';
import setUserLoggedin from '../../utils/LoggedInSender';


import './Login.css';

function Login(props) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    pass: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg('Fill all fields');
      return;
    }
    setErrorMsg('');
    
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        setUserLoggedin();
        localStorage.setItem("user", true)
        navigate('/panel/dashboard');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const navS = {
    backgroundColor: `#fff4008c`,
  };

  const titleS = {
    fontColor: `blue`,
    fontWeight: `700`,
    fontFamily: `cursive`,
    fontSize: `1.5rem`,
  };

  const despS = {
    color: `blue`,
    fontSize: `1rem`,
  };

  return (
    <>
     <nav style={navS} className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span style={titleS} className="navbar-brand" >{props.title}</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <span style={despS} className="nav-link disabled" tabIndex="-1" aria-disabled="true">With us manage your energy consumption</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className='home homeS'>
      <div className='container my-5 containerStyle'>
        <form>
          <h4 style={{ textAlign: `center` }} className='my-2'>
            Login Form
          </h4>
          <div className='mb-3'>
            <InputControl
              className='form-control'
              label='Email'
              type='text'
              placeholder='Enter Your Email'
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            {/* <div id="emailHelp" className="form-text" style={{color:`green`}}>We'll never share your phone number with anyone else.</div> */}
          </div>
          <div className='mb-3'>
            <InputControl
              className='form-control'
              id='exampleInputPassword1'
              label='Password'
              type='password'
              placeholder='Password'
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
          </div>
        </form>
        <div>
          <b>{errorMsg}</b>
          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
            className="button"
          >
            Login
          </button>
          <p>
            Don't have an account?{' '}
            <span>
              <Link to='/signup' style={{ color: `blue` }}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
