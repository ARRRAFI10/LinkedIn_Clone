// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJcyLC_t0H9ldoswdbNLhvMkCBVrg2AW0",
    authDomain: "linkedinclonw.firebaseapp.com",
    projectId: "linkedinclonw",
    storageBucket: "linkedinclonw.appspot.com",
    messagingSenderId: "1018562084159",
    appId: "1:1018562084159:web:fe1019c9a40f671953278a",
    measurementId: "G-L2J1NQ312W"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
