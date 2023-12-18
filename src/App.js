import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';

import './App.css';
import './Nav.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Usage from './components/Usage/Usage';
import Savingmethods from './components/SavingMethods/Savingmethods';
import Devices from './components/Devices/Devices';
import Energycalculator from './components/EnergyCalculator/Energycalculator';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Sidemenu from './components/SideMenu/Sidemenu';


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
      <Router>
        <Navbar />
        <div className='container-fluid'>
          <div className='row'>
            <Sidemenu />
            <Routes>
              <Route path='/' element={<Home loading={setLoading} />} />
              <Route path='/login' element={<Login setLoading={setLoading} />} />
              <Route path='/signup' element={<Signup loading={setLoading} />} />
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
              <Route
                path='/panel/devices'
                element={<Devices />}
              />
              <Route
                path='/panel/energycalculator'
                element={<Energycalculator />}
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
