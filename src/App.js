import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, database, db, refc } from "./firebase";
import { child, get, getDatabase, ref } from "firebase/database";
import { arrayUnion, collection, doc, setDoc, updateDoc } from "@firebase/firestore";
// import { useLocation } from 'react-router-dom';

import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Usage from "./components/Usage/Usage";
import Savingmethods from "./components/SavingMethods/Savingmethods";
import Devices from "./components/Devices/Devices";
import Energycalculator from "./components/EnergyCalculator/Energycalculator";
import NotFound from "./components/NotFound/NotFound";


function App() {
  // const [showNav, setShowNav] = useState(true);
  // const [userName, setuserName] = useState("");

  const [kitchen, setKitchen] = useState({});

  // function to read data from realtime database firebase 
  function readData(dir, collection, stateName, name) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${dir}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        writeData(snapshot.val().Bulb, `${collection}`, "Bulb")
        // writeData(snapshot.val().Heater, `${collection}`, "Heater")
        // writeData(snapshot.val().Induction, `${collection}`, "Induction")
        stateName(snapshot.val());
        console.log(snapshot.val().Bulb);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  // function to write data from realtime database to firestore databse 
  async function writeData(value, collectionName, equipment) {
    const tempRef = doc(db, "Kitchen", "Bulb");

    try {
      await updateDoc(tempRef, {
        current: arrayUnion(value["Current(A)"]),
        // power: arrayUnion(value["Power(Watt)"]),
        // voltage: arrayUnion(value["Voltage(Volt)"])
      });
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    readData("Kitchen", "Kitchen", setKitchen, kitchen);
  }, [])


  const title = `PowerByte`;

  const [navStyle, setNavStyle] = useState(true);
  const navS = {
    backgroundColor: `#fff4008c`
  }

  const titleS = {
    fontColor: `blue`,
    fontWeight: `700`,
    fontFamily: `cursive`,
    fontSize: `1.5rem`
  }

  const despS = {
    color: `blue`,
    fontSize: `1rem`
  }


  return (
    <div className="App">
      <Router>
        <Navbar title={title} navStyle={navStyle} navS={navS} titleS={titleS} despS={despS} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/panel/dashboard" element={<Dashboard setNavStyle={setNavStyle} />} />
          <Route path="/panel/usage" element={<Usage setNavStyle={setNavStyle} />} />
          <Route path="/panel/savingmethods" element={<Savingmethods setNavStyle={setNavStyle} />} />
          <Route path="/panel/devices" element={<Devices setNavStyle={setNavStyle} device1={kitchen} />} />
          <Route path="/panel/energycalculator" element={<Energycalculator setNavStyle={setNavStyle} />} />
          <Route path="*" element={<NotFound setNavStyle={setNavStyle} />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
