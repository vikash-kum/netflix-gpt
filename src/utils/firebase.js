// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3rBtAc5G3HWPZr3EuK2nbPHOM9LhMImg",
  authDomain: "hosting-4962a.firebaseapp.com",
  projectId: "hosting-4962a",
  storageBucket: "hosting-4962a.appspot.com",
  messagingSenderId: "839489853638",
  appId: "1:839489853638:web:b49b480c02f98193ce9fc7",
  measurementId: "G-YRHKXX1NBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
