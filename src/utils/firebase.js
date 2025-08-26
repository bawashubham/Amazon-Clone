// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0vgOTrLIh0z75Ub8hoICtomM5iHREARA",
  authDomain: "clone-b7a48.firebaseapp.com",
  projectId: "clone-b7a48",
  storageBucket: "clone-b7a48.firebasestorage.app",
  messagingSenderId: "661616672890",
  appId: "1:661616672890:web:d0695348d464a17910bbc3",
  measurementId: "G-73QGQZY25H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
