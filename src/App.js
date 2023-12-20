import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';

import './css/App.css';
import './css/Nav.css';
import './css/Home.css';
import './css/Form.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Usage from './components/Usage/Usage';
import Savingmethods from './components/SavingMethods/Savingmethods';
import Power from './components/PowerConsumption/Powerconsumption';
import Energycalculator from './components/EnergyCalculator/Energycalculator';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import DataState from './context/data/DataState';
import Layout from './components/Layout/Layout';
import DeviceA from './components/Devices/DeviceA';
import DevicesB from './components/Devices/DevicesB';
import DevicesC from './components/Devices/DevicesC';


function App() {
  const [loading, setLoading] = useState();

  // function to read data from realtime database firebase


  // function to write data from realtime database to firestore databse
  // async function writeData(value, collectionName, equipment) {
  //   try {
  //     const tempRef = doc(db, collectionName, equipment);
  //     await updateDoc(tempRef, {
  //       current: arrayUnion(value['Current(A)']),
  //       power: arrayUnion(value['Power(Watt)']),
  //       voltage: arrayUnion(value['Voltage(Volt)']),
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }



  if (loading) return <div>Loading...</div>;
  return (
    <div className='App'>
      <DataState>
        <Router>
          <Navbar />
          <div className='container-fluid'>
            <div className='row'>
              <Routes>
                <Route path='/' element={<Home loading={setLoading} />} />
                <Route path='/login' element={<Login setLoading={setLoading} />} />
                <Route path='/signup' element={<Signup loading={setLoading} />} />
                <Route path='/panel' element={<Layout />}>
                  <Route
                    path='/panel/dashboard'
                    element={<Dashboard loading={setLoading} />}
                  />
                  <Route
                    path='/panel/usage'
                    element={<Usage />}
                  />
                  <Route
                    path='/panel/savingmethods'
                    element={<Savingmethods />}
                  />
                  <Route path='/panel/powerconsumption' element={<Power />} >
                    <Route path='/panel/powerconsumption/zone_A' element={<DeviceA />} />
                    <Route path='/panel/powerconsumption/zone_B' element={<DevicesB />} />
                    <Route path='/panel/powerconsumption/zone_C' element={<DevicesC />} />
                  </Route>
                  <Route
                    path='/panel/energycalculator'
                    element={<Energycalculator />}
                  />
                </Route>
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>

      </DataState>
    </div>
  );
}

export default App;
