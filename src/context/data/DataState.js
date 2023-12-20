import { child, get, getDatabase, ref } from 'firebase/database';
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { limits } from '../../constants';
import { Firestore, arrayUnion, doc, updateDoc } from '@firebase/firestore';

const DataContext = createContext();

export function useGlobalData() {
  return useContext(DataContext);
}

const DataState = (props) => {
  const [loading, setLoading] = useState(true);
  const [kitchen, setKitchen] = useState({});
  //   const [room1, setRoom1] = useState({});

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const showAlert = (device, message) => {
    console.log({ device, message });

    setAlert(true);
    setAlertType('danger');
    setAlertMsg(message);
    // console.log(alert, alertMsg, alertType);
  };

  function readData(dir, collection, stateName, name) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${dir}/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          const { Heater, Tubelight, Bulb, fan } = snapshot.val();
          // console.log({ Heater, Tubelight, Bulb, fan });

          if (Heater['Active Power'] > limits.heater) {
            // showAlert();
          }

          if (Tubelight['Active Power'] > limits.tubelight) {
            // showAlert();
          }

          if (Bulb['Active Power'] > limits.bulb) {
            // showAlert();
          }

          if (fan['Active Power'] > limits.fan) {
            // window.alert('FAN ALERT')
            showAlert('Fan', 'Fan is consuming additional power!');
          }
          writeData(snapshot.val().Bulb, `${collection}`, 'Bulb');
          // writeData(snapshot.val().Heater, `${collection}`, 'Heater');
          // writeData(snapshot.val().fan, `${collection}`, 'fan');

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
              console.log(tempRef);
              console.log(value['Current(A)']);
              console.log(value['Power(Watt)']);
              console.log(value['Voltage(Volt)']);
              await updateDoc(tempRef, {
              current: arrayUnion(value['Current(A)']),
              power: arrayUnion(value['Power(Watt)']),
              voltage: arrayUnion(value['Voltage(Volt)']),
          });
      } catch (err) {
            console.error(err);
        }
    }
    
    // async function writeData(value, collectionName, equipment) {
      const writeToFirestore = async (dataObject) => {
        try {
          // Access the 'myCollection' collection in Firestore
          const collectionRef = Firestore.collection('myCollection');
      
          // Add the data object to the collection
          await collectionRef.add(dataObject);
      
          console.log('Data successfully written to Firestore!');
        } catch (error) {
          console.error('Error writing data to Firestore: ', error);
        }
      };

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
    // readData('Room1')
    setInterval(() => {
      readData('Kitchen', 'Kitchen', setKitchen, kitchen);
    }, 5000);
    // eslint-disable-next-line
  }, []);

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
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataState;
