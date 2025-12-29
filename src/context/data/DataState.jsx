import { child, get, getDatabase, ref } from 'firebase/database';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { db, getDownloadURL, storage, storageRef, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { limits } from '../../constants';
import {
  arrayUnion,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore/lite';
import { toast } from 'react-toastify';
import { usePageVisibility } from '../utils/UserVisible';

const DataContext = createContext();

export function useGlobalData() {
  return useContext(DataContext);
}

const DataState = (props) => {

  const [downloadURL, setDownloadURL] = useState('');
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [kitchen, setKitchen] = useState({});
  //   const [room1, setRoom1] = useState({});

  const [bulbGraphCurrent, setBulbGraphCurrent] = useState([]);
  const [bulbGraphVoltage, setBulbGraphVoltage] = useState([]);
  const [bulbGraphPower, setBulbGraphPower] = useState([]);

  const [heaterGraphCurrent, setHeaterGraphCurrent] = useState([]);
  const [heaterGraphVoltage, setHeaterGraphVoltage] = useState([]);
  const [heaterGraphPower, setHeaterGraphPower] = useState([]);

  const [inductionGraphCurrent, setInductionGraphCurrent] = useState([]);
  const [inductionGraphVoltage, setInductionGraphVoltage] = useState([]);
  const [inductionGraphPower, setInductionGraphPower] = useState([]);


  const [bulbGaugeCurrent, setBulbGaugeCurrent] = useState();
  const [bulbGaugeVoltage, setBulbGaugeVoltage] = useState();
  const [bulbGaugePower, setBulbGaugePower] = useState();

  const [heaterGaugeCurrent, setHeaterGaugeCurrent] = useState();
  const [heaterGaugeVoltage, setHeaterGaugeVoltage] = useState();
  const [heaterGaugePower, setHeaterGaugePower] = useState();

  const [inductionGaugeCurrent, setInductionGaugeCurrent] = useState();
  const [inductionGaugeVoltage, setInductionGaugeVoltage] = useState();
  const [inductionGaugePower, setInductionGaugePower] = useState();

  const [predictDataGraph, setPredictDataGraph] = useState([]);

  // Alert System State
  // Alert System State
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const alertsEnabledRef = useRef(alertsEnabled);
  const [alertCount, setAlertCount] = useState(0);
  const suppressedToastIds = useRef(new Set());

  // Keep ref in sync with state for setInterval closure
  useEffect(() => {
    alertsEnabledRef.current = alertsEnabled;
  }, [alertsEnabled]);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleAlerts = () => {
    // console.log("toggleAlerts called. Previous state enabled:", alertsEnabled);
    const newState = !alertsEnabled;
    setAlertsEnabled(newState);
    if (newState) {
      setAlertCount(0); // Reset count when re-enabling
      suppressedToastIds.current.clear();
    }
  };

  const showAlert = (device, message) => {
    const path = window.location.pathname;
    if (path === '/login' || path === '/signup' || path === '/') {
      return;
    }

    const toastId = `${device}-${message}`;

    // Use ref to avoid stale closure issues in setInterval
    if (alertsEnabledRef.current) {
      if (!toast.isActive(toastId)) {
        toast.error(`${device} ${message}`, {
          toastId: toastId
        });
      }
    } else {
      // Logic for disabled alerts: Count them, but dedup heavily to avoid spamming the counter
      if (!suppressedToastIds.current.has(toastId)) {
        setAlertCount(prev => prev + 1);
        suppressedToastIds.current.add(toastId);
        // Clear this ID from suppressed list after 10 seconds to allow re-counting if improper state persists
        setTimeout(() => {
          suppressedToastIds.current.delete(toastId);
        }, 10000);
      }
    }
  };

  function generateGaugeValue(data, id) {
    switch (id) {
      case 'Bulb':
        setBulbGaugeCurrent(
          data.current[data.current.length - 1].x
        );
        setBulbGaugeVoltage(
          data.voltage[data.voltage.length - 1].x
        );
        setBulbGaugePower(
          data.power[data.power.length - 1].x
        );
        // console.log(data.current[data.current.length - 1].x)
        // console.log(data.voltage[data.voltage.length - 1].x)
        // console.log(data.power[data.power.length - 1].x)
        // console.log(data);
        break;

      case 'Heater':
        setHeaterGaugeCurrent(
          data.current[data.current.length - 1].x
        );
        setHeaterGaugeVoltage(
          data.voltage[data.voltage.length - 1].x
        );
        setHeaterGaugePower(
          data.power[data.power.length - 1].x
        );
        break;

      case 'Induction':
        setInductionGaugeCurrent(
          data.current[data.current.length - 1].x
        );
        setInductionGaugeVoltage(
          data.voltage[data.voltage.length - 1].x
        );
        setInductionGaugePower(
          data.power[data.power.length - 1].x
        );
        break;

      default:
        break;
    }
  }


  function generateGraphData(data, id) {
    switch (id) {
      case 'Bulb':
        setBulbGraphCurrent([
          {
            "id": "id",
            "color": "hsl(0, 100%, 50%)",
            data: getLastTenElements(data.current).map((data) => ({
              x: new Date(data.y).toLocaleTimeString('en-US', { hour12: false }),
              y: data.x,
            })),
            "hidden": false,
            "label": "Machine-1"
          },
        ]);
        setBulbGraphVoltage([
          {
            id: id,
            "color": "hsl(117, 70%, 50%)",
            data: getLastTenElements(data.voltage).map((data) => ({
              x: new Date(data.y).toLocaleTimeString('en-US', { hour12: false }),
              y: data.x,
            })),
          },
        ]);

        setBulbGraphPower([
          {
            id: id,
            color: "hsl(88, 70%, 50%)",
            data: getLastTenElements(data.power).map((data) => ({
              x: new Date(data.y).toLocaleTimeString('en-US', { hour12: false }),
              y: data.x,
            })),
          },
        ]);
        // console.log(data);
        break;
      case 'Heater':
        setHeaterGraphCurrent([{
          id: id,
          data: getLastTenElements(data.current).map((data) => ({
            x: new Date(data.y).toLocaleTimeString(),
            y: data.x,
          })),
        }]);

        setHeaterGraphVoltage([{
          id: id,
          data: getLastTenElements(data.voltage).map((data) => ({
            x: new Date(data.y).toLocaleTimeString(),
            y: data.x,
          })),
        }]);
        setHeaterGraphPower([{
          id: id,
          data: getLastTenElements(data.power).map((data) => ({
            x: new Date(data.y).toLocaleTimeString(),
            y: data.x,
          })),
        }]);

        break;
      case 'Induction':
        setInductionGraphCurrent([{
          id: id,
          data: getLastTenElements(data.current).map((data) => ({
            x: new Date(data.y).toLocaleTimeString(),
            y: data.x,
          })),
        }]);

        setInductionGraphVoltage([{
          id: id,
          data: getLastTenElements(data.voltage).map((data) => ({
            x: new Date(data.y).toLocaleTimeString(),
            y: data.x,
          })),
        }]);

        setInductionGraphPower([{
          id: id,
          data: getLastTenElements(data.power).map((data) => ({
            x: new Date(data.y).toLocaleTimeString(),
            y: data.x,
          })),
        }]);

        break;
      default:
        break;
    }
  }


  function readData(dir, collection, stateName, name) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${dir}/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          const { Heater, Bulb, Induction } = snapshot.val();
          const Temprature = snapshot.val()[`Temprature(oC)`]
          // console.log({ Heater, Tubelight, Bulb, fan });
          // console.log({ Induction });

          if (Heater['ActivePower'] > limits.heater) {
            showAlert(
              'Zone-A Machine-3',
              'is Consuming Excess Power'
            );
          }

          if (Temprature > limits.temperature) {
            showAlert(
              'Zone-A Machine',
              'has high Temperature'
            );
          }

          // if (Tubelight['ActivePower'] > limits.tubelight) {
          //   showAlert(
          //     'Tubelight',
          //     'Tubelight is Consuming excess power then it required'
          //   );
          // }

          if (Bulb['ActivePower'] > limits.bulb) {
            showAlert(
              'Zone-A Machine-1',
              'is Consuming Excess Power'
            );
          }

          if (Induction['ActivePower'] > limits.induction) {
            // window.alert('FAN ALERT')
            showAlert('Zone-A Machine-2', 'is Consuming Additional Power!');
          }
          writeData(Bulb, `${collection}`, 'Bulb');
          writeData(Heater, `${collection}`, 'Heater');
          writeData(Induction, `${collection}`, 'Induction');

          stateName(snapshot.val());
          // showAlert(collection,  dir);
        } else {
          console.log('No data available');
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // function to write data from realtime database to firestore databse
  async function writeData(value, collectionName, equipment) {
    try {
      const tempRef = doc(db, collectionName, equipment);
      // console.log({ tempRef });

      await updateDoc(tempRef, {
        current: arrayUnion({
          x: value['Current(A)'],
          y: new Date().toISOString(),
        }),
        power: arrayUnion({
          x: value['ActivePower'],
          y: new Date().toISOString(),
        }),
        voltage: arrayUnion({
          x: value['Voltage(Volt)'],
          y: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  // async function writeData(value, collectionName, equipment) {
  // const writeToFirestore = async (dataObject) => {
  //   try {
  //     // Access the 'myCollection' collection in Firestore
  //     const collectionRef = collection('myCollection');

  //     // Add the data object to the collection
  //     await collectionRef.add(dataObject);

  //     console.log('Data successfully written to Firestore!');
  //   } catch (error) {
  //     console.error('Error writing data to Firestore: ', error);
  //   }
  // };

  // fuction to read or fetch data from firestore
  const fetchData = async (collection, subCollection, param) => {
    try {
      const docRef = doc(db, `${collection}`, `${subCollection}`);
      // const docRef = doc(db, `${collection}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data()) ;
        // setbulb(docSnap.data()[`${param}`]);
        generateGraphData(docSnap.data(), subCollection);
        generateGaugeValue(docSnap.data(), subCollection);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };


  const fetchPridictData = async (collection, subCollection, param) => {
    try {
      const docRef = doc(db, `${collection}`, `${subCollection}`);
      // const docRef = doc(db, `${collection}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data()) ;
        // setbulb(docSnap.data()[`${param}`]);
        makeGraphFromPredictData(docSnap.data(), param);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  const makeGraphFromPredictData = (PredictData, id) => {
    // console.log(PredictData);
    setPredictDataGraph([{
      id: id,
      data: PredictData.data.map((data) => ({
        x: new Date(data.input_date).getDate(),
        y: data.predicted_Active_Power,
      })),
    }]);
    // console.log(predictDataGraph);
  }

  function getLastTenElements(arr) {
    const length = arr.length;
    if (length <= 10) {
      return arr.slice(); // Return a copy of the whole array if it has 10 or fewer elements
    } else {
      return arr.slice(length - 10); // Return the last ten elements if the array has more than 10 elements
    }
  }

  // To get user token
  // const user = auth.currentUser;
  // let tokenId;
  // useEffect(() => {
  //   if (user) {
  //     // console.log(user.accessToken);
  //     tokenId = user.accessToken;
  //   }
  // }, [user]);

  const getCsvUrl = () => {
    getDownloadURL(storageRef(storage, 'predictions_jan.csv'))
      .then((url) => {
        // console.log({ url });
        setDownloadURL(url);
      })
  };

  const isVisible = usePageVisibility();

  useEffect(() => {
    let intervalId;

    if (isVisible && user) {

      readData('Kitchen', 'Kitchen', setKitchen, kitchen);

      fetchData('Kitchen', 'Bulb', 'current');
      fetchData('Kitchen', 'Induction', 'current');
      fetchData('Kitchen', 'Heater', 'current');
      fetchPridictData('predictions102', 'Line102', 'data');
      getCsvUrl();

      intervalId = setInterval(() => {
        readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        fetchData('Kitchen', 'Bulb', 'current');
        fetchData('Kitchen', 'Induction', 'current');
        fetchData('Kitchen', 'Heater', 'current');
        fetchPridictData('predictions102', 'Line102', 'data');
      }, 10000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [isVisible, user]);


  // useEffect(() => {
  //   console.log(alert, alertMsg, alertType);
  // }, [alert, alertMsg, alertType])

  const state = {
    kitchen,
    loading,
    downloadURL,
    predictDataGraph,
    bulbGraphCurrent,
    bulbGraphVoltage,
    bulbGraphPower,
    heaterGraphCurrent,
    heaterGraphVoltage,
    heaterGraphPower,
    inductionGraphCurrent,
    inductionGraphVoltage,
    inductionGraphPower,
    bulbGaugeCurrent,
    bulbGaugeVoltage,
    bulbGaugePower,
    heaterGaugeCurrent,
    heaterGaugeVoltage,
    heaterGaugePower,
    inductionGaugeCurrent,
    inductionGaugeVoltage,
    inductionGaugePower,
    alertsEnabled,
    alertCount,
    toggleAlerts
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataState;
