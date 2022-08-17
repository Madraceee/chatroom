// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore
    } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOlpGwChZSTI7URD6ZOnVlWW-X8NyejCA",
  authDomain: "udemyproject-fcfc7.firebaseapp.com",
  projectId: "udemyproject-fcfc7",
  storageBucket: "udemyproject-fcfc7.appspot.com",
  messagingSenderId: "25431226453",
  appId: "1:25431226453:web:b932f61d18b19e900d3cdc",
  measurementId: "G-LMK2TPJQSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore();


export { firebaseConfig, db};