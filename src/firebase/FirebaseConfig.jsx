// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBv7IYP5SbS_jZJsu_tZmb7c6UtSicbU2k",
    authDomain: "myecom-553e4.firebaseapp.com",
    projectId: "myecom-553e4",
    storageBucket: "myecom-553e4.appspot.com",
    messagingSenderId: "462037550744",
    appId: "1:462037550744:web:1b3da7c53385dd9155b2ed"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }