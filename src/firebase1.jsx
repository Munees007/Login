import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXzwAXJ1U-NBluMC8Brwl_yADh_N6Qo20",
  authDomain: "debugging-c9923.firebaseapp.com",
  databaseURL: "https://debugging-c9923-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "debugging-c9923",
  storageBucket: "debugging-c9923.appspot.com",
  messagingSenderId: "56304464864",
  appId: "1:56304464864:web:413e542b4e31e15d6f3185",
  measurementId: "G-STFTQB0SC0"
};

const app1 = initializeApp(firebaseConfig,"app1");
const analytics = getAnalytics(app1);
const database1 = getDatabase(app1);

export  {app1, database1};