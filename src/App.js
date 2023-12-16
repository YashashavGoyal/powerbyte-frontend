import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { child, get, getDatabase, ref } from 'firebase/database';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Usage from './components/Usage/Usage';
import Savingmethods from './components/SavingMethods/Savingmethods';
import Devices from './components/Devices/Devices';
import Energycalculator from './components/EnergyCalculator/Energycalculator';
import NotFound from './components/NotFound/NotFound';

import { db } from './firebase.js';
import './Nav.css';

function App() {

  const [deviceData, setDeviceData] = useState({});
  const [loading, setLoading] = useState();
  const [kitchen, setKitchen] = useState({});

  // function to read data from realtime database firebase


  // function to write data from realtime database to firestore databse
  async function writeData(value, collectionName, equipment) {
    try {
      const tempRef = doc(db, collectionName, equipment);
      await updateDoc(tempRef, {
        current: arrayUnion(value['Current(A)']),
        power: arrayUnion(value['Power(Watt)']),
        voltage: arrayUnion(value['Voltage(Volt)']),
      });
    } catch (err) {
      console.log(err);
    }
  }


  const title = `PowerByte`;

  if (loading) return <div>Loading...</div>;
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home title={title} loading={setLoading} />} />
          <Route path='/login' element={<Login title={title} setLoading={setLoading} />} />
          <Route path='/signup' element={<Signup title={title} loading={setLoading} />} />
          <Route
            path='/panel/dashboard'
            element={<Dashboard title={title} loading={setLoading} />}
          />
          <Route
            path='/panel/usage'
            element={<Usage title={title}  />}
          />
          <Route
            path='/panel/savingmethods'
            element={<Savingmethods title={title}  />}
          />
          <Route
            path='/panel/devices'
            element={<Devices title={title} />}
          />
          <Route
            path='/panel/energycalculator'
            element={<Energycalculator title={title}  />}
          />
          <Route path='*' element={<NotFound title={title}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
