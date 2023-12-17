import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";

import img404 from './404notfound.gif';
import { isUserLoggedin } from '../../utils/helper';

export default function NotFound(props) {


    // const windowSize = useRef([window.innerWidth, window.innerHeight]);
    // let width = (windowSize.current[0] <= 720) ? `100%` : `50%`;

    const imgS = {
        height: `auto`
    }

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("user", false);
        navigate("/login");
    }

    useEffect(() => {

        if (!isUserLoggedin()) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="">
                    <strong>{props.title}</strong>
                </a>
                <div className="navbar-nav">
                    <div className="text-nowrap">
                        <button className="px-3 my-2 mx-2" onClick={handleLogout}>Sign out</button>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3 sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/panel/dashboard" className="nav-link active" aria-current="page" >
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/panel/usage">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Usage
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/panel/savingmethods">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Saving Methods
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/panel/devices">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Devices
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/panel/energycalculator">
                                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                        Energy Calculator
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/panel/integrations">
                                        <span data-feather="layers" className="align-text-bottom"></span>
                                        Integrations
                                    </Link>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                                <span>Saved reports</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle" className="align-text-bottom"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">The page you are looking for is not found</h1>
                        </div>

                        {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

                        <div className="container-fluid">
                            <div className="not-found-container">
                                <img src={img404} className='not-found-img' alt="404 Not Found" style={imgS} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}
