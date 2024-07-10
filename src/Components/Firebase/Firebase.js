import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Ry5gZKEkDRyyoU1fjj0uxZz7lBuEDVs",
  authDomain: "smartnest-2099.firebaseapp.com",
  projectId: "smartnest-2099",
  storageBucket: "smartnest-2099.appspot.com",
  messagingSenderId: "498084936617",
  appId: "1:498084936617:web:4288bc94451091814922b8",
  measurementId: "G-M2Z9GXYCMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Auth instance
const database = getDatabase(app); // Get Database instance
export { app, auth, database }; // Export Firebase instances


