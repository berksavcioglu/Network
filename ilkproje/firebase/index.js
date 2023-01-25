// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhv2175HimpL1YyKk1JDZXCMoWE6ADWfo",
  authDomain: "networkdemo-b071c.firebaseapp.com",
  projectId: "networkdemo-b071c",
  storageBucket: "networkdemo-b071c.appspot.com",
  messagingSenderId: "342450602337",
  appId: "1:342450602337:web:b7d25b702703dcbbda4520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {
  db
}
