import { getFirestore } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4q2rF_iDoIROLL6zIqIfrdp91t0Pcncw",
  authDomain: "florianbachl.firebaseapp.com",
  projectId: "florianbachl",
  storageBucket: "florianbachl.appspot.com",
  messagingSenderId: "253391646987",
  appId: "1:253391646987:web:8cea9596e3bd56f0b3320e",
  measurementId: "G-D5X5YMHRWG"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp)




