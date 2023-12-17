import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function Energycalculator(props) {


    const [result, setResult] = useState("")

    const calculate = () => {
        const wattage = parseFloat(document.getElementById('wattage').value);
        const hours = parseFloat(document.getElementById('hours').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const days = parseFloat(document.getElementById('days').value);
      
        if (isNaN(wattage) || isNaN(hours) || isNaN(rate) || isNaN(days)) {
          document.getElementById('result').innerText = 'Please enter valid values.';
        } else {
          const dailyCost = (wattage * hours) / 1000 * rate;
          const totalCost = dailyCost * days;
        setResult(`Total cost: Rs${totalCost.toFixed(2)}`);
        }
    }

    return (
        <>
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
                                        Power Consumption
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
                            <h1 className="h2">Electricity Calculator</h1>
                            
                        </div>

                        {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

                        <div className="container-fluid">
                            <div className="calculator">
                                <h2>Electricity Cost Calculator</h2>
                                <div className="input-section">
                                    <label htmlFor="wattage">Appliance Wattage (W):</label>
                                    <input type="number" id="wattage" min="1" step="1" />
                                </div>
                                <div className="input-section">
                                    <label htmlFor="hours">Hours Used Per Day:</label>
                                    <input type="number" id="hours" min="1" step="1" />
                                </div>
                                <div className="input-section">
                                    <label htmlFor="rate">Rate per kWh (Rs):</label>
                                    <input type="number" id="rate" min="0" step="0.01" />
                                </div>
                                <div className="input-section">
                                    <label htmlFor="days">Number of Days:</label>
                                    <input type="number" id="days" min="1" step="1" />
                                </div>
                                <button onClick={calculate}>Calculate</button>
                                <div id="result" className="result-section">{result}</div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}
