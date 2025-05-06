import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// ✅ Updated Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC_OKwzsTJVBO9ffnsR47sKi3UjA57eu64",
  authDomain: "tabletrove-80cb0.firebaseapp.com",
  projectId: "tabletrove-80cb0",
  storageBucket: "tabletrove-80cb0.appspot.com",
  messagingSenderId: "124529385870",
  appId: "1:124529385870:web:d821d0a3c6649e7edd04df"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Form Handling
const form = document.getElementById("booking-form");
const bookingForm = document.getElementById("bookingForm");

function closeForm() {
  if (bookingForm) {
    bookingForm.style.display = "none";
  }
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    try {
     await addDoc(collection(db, "bookings"), {
  name,
  contact,
  date,
  guests,
  status: "pending"
});
      alert("✅ Booking submitted successfully!");
      form.reset();
      closeForm();
    } catch (error) {
      alert("❌ Error saving booking: " + error.message);
    }
  });
}
