// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiw9SZf2mD-B9FTf1xJ8xWJm-MJivVQls",
  authDomain: "gloria-fitness.firebaseapp.com",
  projectId: "gloria-fitness",
  storageBucket: "gloria-fitness.appspot.com",
  messagingSenderId: "762952319732",
  appId: "1:762952319732:web:67c887dbe14d5d0dce54a1",
  measurementId: "G-R3NB2DZPVK"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp)
