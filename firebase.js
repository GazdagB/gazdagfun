// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv1Gywx3x1MiAwfg_kadKHEpEYgAT_3h8",
  authDomain: "gazdagfun.firebaseapp.com",
  projectId: "gazdagfun",
  storageBucket: "gazdagfun.appspot.com",
  messagingSenderId: "994788691110",
  appId: "1:994788691110:web:1c82cf545443fe03833867",
  measurementId: "G-BFMWQZS726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
