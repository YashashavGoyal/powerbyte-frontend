import React from "react";
import { Link } from "react-router-dom";
import bg from './home-bg.png'

function Home(props) {
  const btnS = {
    display: `flex`,
    width: `40%`,
    justifyContent: `center`,
    gap: `10px`
  }

  const homeS ={
    background: `url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    height: `100%`,
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100%`,
    zIndex: `-1`,
    display:  `flex`,
    alignItems: `center`
  }

  const container = {
    border: `2px solid #066b13`,
    padding: `20px 10px`,
    background: `rgb(240 248 255 / 17%)`,
    borderRadius: `20px`,
    backdropFilter: `blur(10px)`,
    height: `50vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`
  }

  const button = {
    border: `none`,
    textDecoration: `none`,
    color: `black`,
    padding: `10px 20px`,
    background: `white`,
    borderRadius: `10px`
  }

  return (
    <>
      <div className="home" style={homeS}>
        <div className="container my-5" style={container}>
          <div className="head" style={{ textAlign: 'center' }}>
            <h1>Welcome To EnergySavers</h1>
            <p>We are pleased to welcome you</p>
          </div>
          <div className="btns" style={btnS}>
            <Link to="/login" style={button}> Login</Link>
            <Link to="/signup" style={button}> SignUp</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
