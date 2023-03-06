// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCHAXg_LCsVFSFiIGW2_Q_7Y5OvUWgU9Io",
  authDomain: "twitterclone-e718e.firebaseapp.com",
  projectId: "twitterclone-e718e",
  storageBucket: "twitterclone-e718e.appspot.com",
  messagingSenderId: "905712184871",
  appId: "1:905712184871:web:db54a2897bbbf2e7e4a802",
  measurementId: "G-3RP0VM3DWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;