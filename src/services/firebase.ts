// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";

// require('dotenv').config()

const firebaseConfig = {
    apiKey: "AIzaSyCgGZqvkGWPUKuiCRRASBlWqbEiPNCZ_a0",
    authDomain: "ccd2022-baae4.firebaseapp.com",
    projectId: "ccd2022-baae4",
    storageBucket: "ccd2022-baae4.appspot.com",
    messagingSenderId: "127207456229",
    appId: "1:127207456229:web:9f71bf4d1ac8ecc600c30c"
}

const app = initializeApp(firebaseConfig)

export default app;