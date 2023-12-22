import { child, get, getDatabase, ref } from 'firebase/database';
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { limits } from '../../constants';
import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore/lite';
import { toast } from 'react-toastify';

const DataContext = createContext();

export function useGlobalData() {
  return useContext(DataContext);
}

const DataState = (props) => {


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

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const showAlert = (device, message) => {
    // console.log({ device, message });

    // setAlert(true);
    // setAlertType('danger');
    // setAlertMsg(message);
    // console.log(alert, alertMsg, alertType);
    const path = window.location.pathname;
    if (path === '/login' || path === '/signup' || path === '/') {
      console.log(path);
      return;
    }
    else {
      // console.log('Working');
      toast(`${device} ${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error"
      });
      return;
    }
  };

  function generateGraphData(data, id) {
    switch (id) {
      case 'Bulb':
        setBulbGraphCurrent([
          {
            id: id,
            data: getLastTenElements(data.current).map((data) => ({
              x: new Date(data.y).getSeconds(),
              y: data.x,
            })),
          },
        ]);
        setBulbGraphVoltage([
          {
            id: id,
            data: getLastTenElements(data.voltage).map((data) => ({
              x: new Date(data.y).getSeconds(),
              y: data.x,
            })),
          },
        ]);

        setBulbGraphPower([
          {
            id: id,
            data: getLastTenElements(data.power).map((data) => ({
              x: new Date(data.y).getSeconds(),
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
            x: new Date(data.y).getSeconds(),
            y: data.x,
          })),
        }]);

        setHeaterGraphVoltage([{
          id: id,
          data: getLastTenElements(data.voltage).map((data) => ({
            x: new Date(data.y).getSeconds(),
            y: data.x,
          })),
        }]);
        setHeaterGraphPower([{
          id: id,
          data: getLastTenElements(data.power).map((data) => ({
            x: new Date(data.y).getSeconds(),
            y: data.x,
          })),
        }]);

        break;
      case 'Induction':
        setInductionGraphCurrent([{
          id: id,
          data: getLastTenElements(data.current).map((data) => ({
            x: new Date(data.y).getSeconds(),
            y: data.x,
          })),
        }]);

        setInductionGraphVoltage([{
          id: id,
          data: getLastTenElements(data.voltage).map((data) => ({
            x: new Date(data.y).getSeconds(),
            y: data.x,
          })),
        }]);

        setInductionGraphPower([{
          id: id,
          data: getLastTenElements(data.power).map((data) => ({
            x: new Date(data.y).getSeconds(),
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
          // console.log({ Heater, Tubelight, Bulb, fan });
          // console.log({ Induction });
          if (Heater['ActivePower'] > limits.heater) {
            showAlert(
              'Zone-A Heater',
              'is Consuming Excess Power'
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
              'Zone-A Bulb',
              'is Consuming Excess Power'
            );
          }

          if (Induction['ActivePower'] > limits.induction) {
            // window.alert('FAN ALERT')
            showAlert('Zone-A Induction', 'is Consuming Additional Power!');
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
  const writeToFirestore = async (dataObject) => {
    try {
      // Access the 'myCollection' collection in Firestore
      const collectionRef = collection('myCollection');

      // Add the data object to the collection
      await collectionRef.add(dataObject);

      console.log('Data successfully written to Firestore!');
    } catch (error) {
      console.error('Error writing data to Firestore: ', error);
    }
  };

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
        // console.log({ subCollection });
        // console.log(bulb);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  function getLastTenElements(arr) {
    const length = arr.length;
    if (length <= 10) {
      return arr.slice(); // Return a copy of the whole array if it has 10 or fewer elements
    } else {
      return arr.slice(length - 10); // Return the last ten elements if the array has more than 10 elements
    }
  }

  // const user = auth.currentUser;
  // let tokenId;
  // useEffect(() => {
  //   if (user) {
  //     // console.log(user.accessToken);
  //     tokenId = user.accessToken;
  //   }
  // }, [user]);

  useEffect(() => {
    readData('Kitchen', 'Kitchen', setKitchen, kitchen);

    fetchData('Kitchen', 'Bulb', 'current');
    fetchData('Kitchen', 'Induction', 'current');
    fetchData('Kitchen', 'Heater', 'current');

    setInterval(() => {
      readData('Kitchen', 'Kitchen', setKitchen, kitchen);
      fetchData('Kitchen', 'Bulb', 'current');
      fetchData('Kitchen', 'Induction', 'current');
      fetchData('Kitchen', 'Heater', 'current');
    }, 10000);
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setbulb(getLastTenElements(bulb));
  //     console.log(bulb);
  //   }, 7000);
  // }, [bulb]);

  // useEffect(() => {
  //   console.log(alert, alertMsg, alertType);
  // }, [alert, alertMsg, alertType])

  const state = {
    kitchen,
    loading,
    alert,
    alertType,
    alertMsg,
    setAlert,
    setAlertMsg,
    setAlertType,
    showAlert,
    bulbGraphCurrent,
    bulbGraphVoltage,
    bulbGraphPower,
    heaterGraphCurrent,
    heaterGraphVoltage,
    heaterGraphPower,
    inductionGraphCurrent,
    inductionGraphVoltage,
    inductionGraphPower
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataState;
