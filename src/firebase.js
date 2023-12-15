// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import 'firebase/compat/firestore';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQiu3uRke16KhV7xzfcbMc95spXCpfUv8",
  authDomain: "energysavers-es.firebaseapp.com",
  databaseURL: "https://energysavers-es-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "energysavers-es",
  storageBucket: "energysavers-es.appspot.com",
  messagingSenderId: "247785639120",
  appId: "1:247785639120:web:903d77d43f678011b8a2d5",
  measurementId: "G-2ESQZCQBRN"
};


const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth();

const analytics = getAnalytics(app);

const database = getDatabase(app);

const db = getFirestore(app); // Initialize Firestore

export { app, auth, analytics, database, db};