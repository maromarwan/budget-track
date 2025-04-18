// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2WSQ9lwvPW8z3f-NBtfV8wdDKFGKMdgI",
  authDomain: "budget-track-754ab.firebaseapp.com",
  projectId: "budget-track-754ab",
  storageBucket: "budget-track-754ab.firebasestorage.app",
  messagingSenderId: "398542908574",
  appId: "1:398542908574:web:60eb59838543286bc11f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
