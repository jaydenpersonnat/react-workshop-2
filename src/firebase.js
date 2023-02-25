// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDEDmW2v1j0vQ4Sl_ehQXunAfB_uNA4nqA",
   authDomain: "lucky-number-guesses.firebaseapp.com",
   projectId: "lucky-number-guesses",
   storageBucket: "lucky-number-guesses.appspot.com",
   messagingSenderId: "213381728933",
   appId: "1:213381728933:web:021f420d19e65c98445b4c",
   measurementId: "G-WZKJHM4N5Q"
 };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

