import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBrcpShytwoinADwH_hzV5jPuDio6bBKSI",
    authDomain: "rentwallex.firebaseapp.com",
    projectId: "rentwallex",
    storageBucket: "rentwallex.appspot.com",
    messagingSenderId: "1065475443279",
    appId: "1:1065475443279:web:606f07b62c89a62f74f83a",
    measurementId: "G-VLDVYN4EZX",
    databaseURL: "https://rentwallex-default-rtdb.firebaseio.com"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app
