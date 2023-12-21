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
  Firestore,
} from 'firebase/firestore/lite';

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

  const [bulb, setbulb] = useState({});

  const showAlert = (device, message) => {
    // console.log({ device, message });

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
            showAlert('Active', 'Active is Consuming excess power then i required');
          }

          if (Tubelight['Active Power'] > limits.tubelight) {
            showAlert('Tubelight', 'Tubelight is Consuming excess power then it required');
          }

          if (Bulb['Active Power'] > limits.bulb) {
            showAlert('Kitchen-Bulb', 'Bulb is Consuming excess power then it required');
          }

          if (fan['Active Power'] > limits.fan) {
            // window.alert('FAN ALERT')
            showAlert('Fan', 'Fan is consuming additional power!');
          }
          writeData(Bulb, `${collection}`, 'Bulb');
          writeData(Heater, `${collection}`, 'Heater');
          writeData(fan, `${collection}`, 'fan');

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
          x: value['Power(Watt)'],
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
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data()[`${param}`]) ;
        setbulb(docSnap.data()[`${param}`]);
        // console.log(bulb);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
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
  
  const [graph, setGraph] = useState([
    [
      {
        "id": "Bulb",
        "color": "hsl(124, 70%, 50%)",
        "data": [
          {
            "x": bulb[0].x,
            "y": bulb[0].y
          },
          {
            "x": bulb[1].x,
            "y": bulb[1].y
          },
          {
            "x": bulb[2].x,
            "y": bulb[2].y
          },
          {
            "x": bulb[3].x,
            "y": bulb[3].y
          },
          {
            "x": bulb[4].x,
            "y": bulb[4].y
          },
          {
            "x": bulb[5].x,
            "y": bulb[5].y
          },
          {
            "x": bulb[6].x,
            "y": bulb[6].y
          },
          {
            "x": bulb[7].x,
            "y": bulb[7].y
          },
          {
            "x": bulb[8].x,
            "y": bulb[8].y
          },
          {
            "x": bulb[9].x,
            "y": bulb[9].y
          }
        ]
      },
      {
        "id": "france",
        "color": "hsl(183, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 42
          },
          {
            "x": "helicopter",
            "y": 181
          },
          {
            "x": "boat",
            "y": 68
          },
          {
            "x": "train",
            "y": 70
          },
          {
            "x": "subway",
            "y": 254
          },
          {
            "x": "bus",
            "y": 76
          },
          {
            "x": "car",
            "y": 0
          },
          {
            "x": "moto",
            "y": 215
          },
          {
            "x": "bicycle",
            "y": 87
          },
          {
            "x": "horse",
            "y": 25
          },
          {
            "x": "skateboard",
            "y": 188
          },
          {
            "x": "others",
            "y": 266
          }
        ]
      },
      {
        "id": "us",
        "color": "hsl(270, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 9
          },
          {
            "x": "helicopter",
            "y": 22
          },
          {
            "x": "boat",
            "y": 197
          },
          {
            "x": "train",
            "y": 282
          },
          {
            "x": "subway",
            "y": 108
          },
          {
            "x": "bus",
            "y": 268
          },
          {
            "x": "car",
            "y": 162
          },
          {
            "x": "moto",
            "y": 185
          },
          {
            "x": "bicycle",
            "y": 38
          },
          {
            "x": "horse",
            "y": 5
          },
          {
            "x": "skateboard",
            "y": 225
          },
          {
            "x": "others",
            "y": 137
          }
        ]
      },
      {
        "id": "germany",
        "color": "hsl(188, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 51
          },
          {
            "x": "helicopter",
            "y": 240
          },
          {
            "x": "boat",
            "y": 91
          },
          {
            "x": "train",
            "y": 1
          },
          {
            "x": "subway",
            "y": 229
          },
          {
            "x": "bus",
            "y": 134
          },
          {
            "x": "car",
            "y": 149
          },
          {
            "x": "moto",
            "y": 21
          },
          {
            "x": "bicycle",
            "y": 265
          },
          {
            "x": "horse",
            "y": 223
          },
          {
            "x": "skateboard",
            "y": 58
          },
          {
            "x": "others",
            "y": 188
          }
        ]
      },
      {
        "id": "norway",
        "color": "hsl(176, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 77
          },
          {
            "x": "helicopter",
            "y": 275
          },
          {
            "x": "boat",
            "y": 190
          },
          {
            "x": "train",
            "y": 276
          },
          {
            "x": "subway",
            "y": 18
          },
          {
            "x": "bus",
            "y": 227
          },
          {
            "x": "car",
            "y": 59
          },
          {
            "x": "moto",
            "y": 30
          },
          {
            "x": "bicycle",
            "y": 288
          },
          {
            "x": "horse",
            "y": 3
          },
          {
            "x": "skateboard",
            "y": 193
          },
          {
            "x": "others",
            "y": 67
          }
        ]
      }
    ]
  ]);



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
    fetchData('Kitchen','Bulb', 'current');
    // readData('Room1')
    setInterval(() => {
      readData('Kitchen', 'Kitchen', setKitchen, kitchen);
      fetchData('Kitchen', 'Bulb', 'current');
    }, 7000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setInterval(() => {
      setData(getLastTenElements(bulb));
      console.log(bulb);
    }, 7000);
  }, [bulb])
  

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
    graph
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataState;
