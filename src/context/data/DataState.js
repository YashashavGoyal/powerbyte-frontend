import { get, ref } from "firebase/database";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataState = (props) => {

    const [loading, setLoading] = useState(true);
    const [kitchen, setKitchen] = useState({});

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
                } else {
                    console.log('No data available');
                }
            }).then(() => {
                setLoading(false);
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

    useEffect(() => {

        readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        setInterval(() => {
            readData('Kitchen', 'Kitchen', setKitchen, kitchen);
        }, 5000);
    }, []);


    const state = {}

    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;