// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE427of6xHWyFCJSVcmpjxVOXyHSM2jjo",
  authDomain: "flashcardquiz-cb922.firebaseapp.com",
  databaseURL: "https://flashcardquiz-cb922-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flashcardquiz-cb922",
  storageBucket: "flashcardquiz-cb922.appspot.com",
  messagingSenderId: "339858796624",
  appId: "1:339858796624:web:baa6e2705e55fe87cd2155",
  measurementId: "G-M9X3ZB0JC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore()
