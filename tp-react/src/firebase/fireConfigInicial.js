// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import { getFirestore } from "firebase/firestore";  -->sin uso aun

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0oZi1BwFDrl4LOGzKEPGsEdOrKdjTCFY",
  authDomain: "tp-react-cac.firebaseapp.com",
  projectId: "tp-react-cac",
  storageBucket: "tp-react-cac.appspot.com",
  messagingSenderId: "112913028260",
  appId: "1:112913028260:web:df9c479ed51f95d7d88231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

// Get a list of cities from your database
/*async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}*/

// Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(appFirebase); -->sin uso aun