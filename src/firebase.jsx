import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZUrS8Pe1Dxxd64--9PpYqXyXmgmoIoGw",
  authDomain: "debugging-ff1c7.firebaseapp.com",
  databaseURL: "https://debugging-ff1c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "debugging-ff1c7",
  storageBucket: "debugging-ff1c7.appspot.com",
  messagingSenderId: "961088399666",
  appId: "1:961088399666:web:c82a3111588fe215764f2b",
  measurementId: "G-MW69HJC36B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db =getFirestore(app);
const database = getDatabase(app);

export  {app , db , auth,database};
