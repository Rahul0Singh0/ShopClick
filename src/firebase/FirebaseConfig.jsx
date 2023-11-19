// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAIU8CdrkUJR0NGA8hVox6CjknfUCNab-U",
  authDomain: "shopclick-a05a2.firebaseapp.com",
  projectId: "shopclick-a05a2",
  storageBucket: "shopclick-a05a2.appspot.com",
  messagingSenderId: "800502296446",
  appId: "1:800502296446:web:cadfdf352c1b66d7960d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}