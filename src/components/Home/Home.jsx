import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const btnS = {
    display: `flex`,
    width: `40%`,
    justifyContent: `center`,
    gap: `10px`,
    fontWeight: 800
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
      <nav className="navbar navbar-bg navbar-expand-lg ">
        <div className="container-fluid">
          <span className="navbar-brand logo-container">
            <span className="logo-full"></span>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <span className="nav-link disabled" tabIndex="-1" aria-disabled="true">With us manage your energy consumption</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="home homeS">
        <div className="container my-5">
          <div className="head" style={{ textAlign: 'center' }}>
            <h1>Welcome To PowerBytes</h1>
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
