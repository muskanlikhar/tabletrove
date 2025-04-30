import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("form");
const bookingForm = document.getElementById("bookingForm");

function openForm() {
  bookingForm.style.display = "flex";
}

function closeForm() {
  bookingForm.style.display = "none";
}

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
      guests
    });
    alert("Booking submitted successfully!");
    closeForm();
  } catch (error) {
    alert("Error saving booking: " + error.message);
  }
});
