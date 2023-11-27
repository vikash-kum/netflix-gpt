// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaqJKyYS2w8NtWGSE9qfi3Uyo2U_q8WJE",
  authDomain: "netflix-gpt-vik.firebaseapp.com",
  projectId: "netflix-gpt-vik",
  storageBucket: "netflix-gpt-vik.appspot.com",
  messagingSenderId: "783384572585",
  appId: "1:783384572585:web:34a5a2f126d9d97d5e2fb8",
  measurementId: "G-X8MLT302JL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
