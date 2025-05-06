import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your Firebase config (your final version)
const firebaseConfig = {
  apiKey: "AIzaSyC_OKwzsTJVBO9ffnsR47sKi3UjA57eu64",
  authDomain: "tabletrove-80cb0.firebaseapp.com",
  projectId: "tabletrove-80cb0",
  storageBucket: "tabletrove-80cb0.appspot.com",
  messagingSenderId: "124529385870",
  appId: "1:124529385870:web:d821d0a3c6649e7edd04df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("admin-login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ✅ Redirect to admin panel
      window.location.href = "admin.html";
    })
    .catch((error) => {
      document.getElementById("login-error").textContent = "Invalid email or password.";
    });
});
