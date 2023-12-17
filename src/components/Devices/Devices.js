import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { child, get, getDatabase, ref } from 'firebase/database';

export default function Devices(props) {

    // console.log(kitchen);

    const [loading, setLoading] = useState(true);
    const [kitchen, setKitchen] = useState({});

    function readData(dir, collection, stateName, name) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `${dir}/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    // console.log(snapshot.val());

                    // writeData(snapshot.val().Bulb, `${collection}`, 'Bulb');
                    // writeData(snapshot.val().Heater, `${collection}`, 'Heater');
                    // writeData(snapshot.val().fan, `${collection}`, 'fan');

                    stateName(snapshot.val());
                } else {
                    console.log('No data available');
                }
            }).then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // function to write data from realtime database to firestore databse
    // async function writeData(value, collectionName, equipment) {
    //     try {
    //         const tempRef = doc(db, collectionName, equipment);
    //         await updateDoc(tempRef, {
    //             current: arrayUnion(value['Current(A)']),
    //             power: arrayUnion(value['Power(Watt)']),
    //             voltage: arrayUnion(value['Voltage(Volt)']),
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    useEffect(() => {

        readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        setInterval(() => {
            readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        }, 5000);
    }, []);

    if (loading) return <div>Loading...</div>;
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
                                <span className="link-secondary" aria-label="Add a new report">
                                    <span data-feather="plus-circle" className="align-text-bottom"></span>
                                </span>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <span className="nav-link" >
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Current month
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" >
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Last quarter
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" >
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Social engagement
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" >
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Year-end sale
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Device</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar" className="align-text-bottom"></span>
                                    This week
                                </button>
                            </div>
                        </div>

                        {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

                        <div className="container-fluid">
                            <table className="table table-striped table-bordered">
                                <thead className="bg-success">
                                    <tr>
                                        <th style={{color: `white`, fontSize: `20px`}} className='center' colSpan={4} scope="col">Room-1 Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='table-primary'>
                                        <th className='center' colSpan={2} scope="col">Temperature (oC)</th>
                                        <th className='center' colSpan={2} scope="col">{kitchen["Temprature(oC)"]} °C</th>
                                    </tr>
                                    <tr className='table-primary'>
                                        <th scope="col">Device</th>
                                        <th scope="col">Power (Watt)</th>
                                        <th scope="col">Voltage (Volt)</th>
                                        <th scope="col">Current (A)</th>
                                    </tr>
                                    <tr className='table-primary'>
                                        <th scope="row">Bulb</th>
                                        <td>{kitchen.Bulb["Power(Watt)"]}</td>
                                        <td>{kitchen.Bulb["Voltage(Volt)"]}</td>
                                        <td>{kitchen.Bulb["Current(A)"]}</td>
                                    </tr>
                                    <tr className='table-primary'>
                                        <th scope="row">Heater</th>
                                        <td>{kitchen.Heater["Power(Watt)"]}</td>
                                        <td>{kitchen.Heater["Voltage(Volt)"]}</td>
                                        <td>{kitchen.Heater["Current(A)"]}</td>
                                    </tr>
                                    <tr className='table-primary'>
                                        <th scope="row">Fan</th>
                                        <td>{kitchen.fan["Power(Watt)"]}</td>
                                        <td>{kitchen.fan["Voltage(Volt)"]}</td>
                                        <td>{kitchen.fan["Current(A)"]}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}
