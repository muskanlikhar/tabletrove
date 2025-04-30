// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB66c4IOFIYugi-vwboYk1GqPOEQrI7mXA",
  authDomain: "tabletrove-5d8a2.firebaseapp.com",
  projectId: "tabletrove-5d8a2",
  storageBucket: "tabletrove-5d8a2.firebasestorage.app",
  messagingSenderId: "60366621653",
  appId: "1:60366621653:web:01dcff1f23e71640f10b5c",
  measurementId: "G-EYKJ7R9439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
