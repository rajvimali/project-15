// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAuXKMEBP25VeqNoUQsCPytpHS6YfsLhwU",
    authDomain: "carrentalrajvi.firebaseapp.com",
    projectId: "carrentalrajvi",
    storageBucket: "carrentalrajvi.appspot.com",
    messagingSenderId: "35331978398",
    appId: "1:35331978398:web:655060febd18bc47e4f78f",
    measurementId: "G-THEBSKYKMQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database, app };
export const auth = firebase.auth();