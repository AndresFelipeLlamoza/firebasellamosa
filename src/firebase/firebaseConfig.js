// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;