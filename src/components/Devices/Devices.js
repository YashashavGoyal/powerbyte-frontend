import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { child, get, getDatabase, ref } from 'firebase/database';

import { isUserLoggedin } from '../../utils/helper';

export default function Devices(props) {

    // console.log(kitchen);

    const [loading, setLoading] = useState(true);
    const [kitchen, setKitchen] = useState({});

    function readData(dir, collection, stateName, name) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `${dir}/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());

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

    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.setItem("user", false);
      navigate("/login");
    }

    useEffect(() => {

        readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        setInterval(() => {
            readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        }, 5000);
        if (!isUserLoggedin()) {
            navigate("/login");
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" >
                    <strong>{props.title}</strong>
                </span>
                <div className="navbar-nav">
                    <div className="text-nowrap">
                        <button className="px-2 mx-2 my-2" onClick={handleLogout}>Sign out</button>
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
                            <div className="list">
                                <h1>Kitchen Data</h1>
                                <div className="collection">
                                    <h4>
                                        Temperature (oC) : {kitchen["Temprature(oC)"]} °C
                                    </h4>
                                </div>

                                <div className="collection">
                                    <h3>Heater</h3>
                                    <div className="device">

                                        <ul>
                                            <li>Current (A) : {kitchen.Heater["Current(A)"]} A</li>
                                            <li>Power (Watt) : {kitchen.Heater["Power(Watt)"]} W</li>
                                            <li>Voltage (Volt) : {kitchen.Heater["Voltage(Volt)"]} V</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="collection">
                                    <h3>Bulb</h3>
                                    <div className="device">
                                        <ul>
                                            <li>Current(A) : {kitchen.Bulb["Current(A)"]} A</li>
                                            <li>Power(Watt) : {kitchen.Bulb["Power(Watt)"]} W</li>
                                            <li>Voltage(Volt) : {kitchen.Bulb["Voltage(Volt)"]} V</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="collection">
                                    <h3>Fan</h3>
                                    <div className="device">
                                        <ul>
                                            <li>Current (A) : {kitchen.fan["Current(A)"]} A</li>
                                            <li>Power (Watt) : {kitchen.fan["Power(Watt)"]} W</li>
                                            <li>Voltage (Volt) : {kitchen.fan["Voltage(Volt)"]} V</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}
