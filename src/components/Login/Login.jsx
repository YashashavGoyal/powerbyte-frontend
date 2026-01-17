import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

import InputControl from '../InputControl/InputControl';
import { auth } from '../../firebase';
import setUserLoggedin from '../../utils/LoggedInSender';


import logoFull from "../../img/logo-full.png";

import PublicLayout from '../Layout/PublicLayout';

// import './Login.css';

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

  const handleGuestLogin = () => {
    setSubmitButtonDisabled(true);
    signInAnonymously(auth)
      .then(() => {
        setSubmitButtonDisabled(false);
        setUserLoggedin();
        localStorage.setItem("user", true);
        navigate('/panel/dashboard');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };


  return (
    <PublicLayout>
      <div className='w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl border border-gray-100'>
        <h2 className='mb-6 text-2xl font-bold text-center text-gray-900'>
          Welcome Back
        </h2>

        <form>
          <InputControl
            label='Email'
            type='email'
            placeholder='Enter Your Email'
            value={values.email || ''}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label='Password'
            type='password'
            placeholder='Password'
            value={values.pass || ''}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
        </form>

        <div className='mt-4'>
          {errorMsg && (
            <p className='mb-4 text-sm font-medium text-center text-red-600'>{errorMsg}</p>
          )}

          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
            className={`w-full px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {submitButtonDisabled ? 'Logging in...' : 'Login'}
          </button>

          <button
            disabled={submitButtonDisabled}
            onClick={handleGuestLogin}
            className={`w-full px-4 py-2 mt-4 font-semibold text-blue-600 transition-colors bg-white border border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Guest Login
          </button>

          <p className='mt-4 text-sm text-center text-gray-600'>
            Don't have an account?{' '}
            <Link to='/signup' className='font-medium text-blue-600 hover:text-blue-500 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Login;
