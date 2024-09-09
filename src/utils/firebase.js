// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0q83Q2Mj7ypg_nVRdReWBHAAuXv5W10",
  authDomain: "sharanflix-gpt.firebaseapp.com",
  projectId: "sharanflix-gpt",
  storageBucket: "sharanflix-gpt.appspot.com",
  messagingSenderId: "685538594203",
  appId: "1:685538594203:web:e267c18b223e3bf125253e",
  measurementId: "G-H21J74E88K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
