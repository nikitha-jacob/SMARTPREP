
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAa9k3B2oCLhUvCeF39WL7I3U9J8yakJFM",
  authDomain: "smartprep-c0510.firebaseapp.com",
  projectId: "smartprep-c0510",
  storageBucket: "smartprep-c0510.appspot.com",
  messagingSenderId: "702367459239",
  appId: "1:702367459239:web:60a6e2cb56457b6591b882",
  measurementId: "G-LBFDC6RHGB"
};



const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)