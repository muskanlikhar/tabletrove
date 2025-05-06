import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_OKwzsTJVBO9ffnsR47sKi3UjA57eu64",
  authDomain: "tabletrove-80cb0.firebaseapp.com",
  projectId: "tabletrove-80cb0",
  storageBucket: "tabletrove-80cb0.appspot.com",
  messagingSenderId: "124529385870",
  appId: "1:124529385870:web:d821d0a3c6649e7edd04df"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
