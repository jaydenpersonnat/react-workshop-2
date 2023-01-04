// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD0nz8Tgn2ErZLhbF1nwXlKZzz4eU30wPw",
   authDomain: "react-workshop-2.firebaseapp.com",
   projectId: "react-workshop-2",
   storageBucket: "react-workshop-2.appspot.com",
   messagingSenderId: "1096879247502",
   appId: "1:507266397052:web:8b3eefbbf5c6af78bceaf9",
   measurementId: "G-L6H014ZLGT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

