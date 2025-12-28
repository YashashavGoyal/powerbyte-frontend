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

        </>
    )
}
