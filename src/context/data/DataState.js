import { child, get, getDatabase, ref } from 'firebase/database';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

const DataContext = createContext();

export function useGlobalData() {
  return useContext(DataContext);
}

const DataState = (props) => {
  const [loading, setLoading] = useState(true);
  const [kitchen, setKitchen] = useState({});
  //   const [room1, setRoom1] = useState({});

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const showAlert = (collection, subCollection) => {

    let limit;

    if (subCollection === "Bulb") {
      limit = 3;
      console.log('bulb');
    } else if (subCollection === "Heater") {
      console.log('heater');
      limit = 200;
    } else {
      console.log('fan');
      limit = 60;
    }

    let value = collection[subCollection]['Power(Watt)'];
    console.log(value);
    // if (value > limit) {
    //   setAlert(true);
    //   setAlertType("danger");
    //   setAlertMsg(`Your Device-${subCollection} is cosuming more power`);
    // }
    // console.log(alert, alertMsg, alertType);

  }

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
          // showAlert(collection,  dir);
        } else {
          console.log('No data available');
        }
      })
      .then(() => {
        setLoading(false);
      }).then(() => {
        // showAlert('kitchen', `Bulb`);
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


  const user = auth.currentUser;
  let tokenId;
  useEffect(() => {
    if (user) {
      console.log(user.accessToken);
      tokenId = user.accessToken
    }
  }, [user]);

  useEffect(() => {
    readData('Kitchen', 'Kitchen', setKitchen, kitchen);
    // readData('Room1')
    setInterval(() => {
      readData('Kitchen', 'Kitchen', setKitchen, kitchen);
      showAlert(kitchen, 'Bulb');
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
    showAlert
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataState;
