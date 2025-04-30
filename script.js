import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB66c4IOFIYugi-vwboYk1GqPOEQrI7mXA",
  authDomain: "tabletrove-5d8a2.firebaseapp.com",
  projectId: "tabletrove-5d8a2",
  storageBucket: "tabletrove-5d8a2.appspot.com",
  messagingSenderId: "60366621653",
  appId: "1:60366621653:web:01dcff1f23e71640f10b5c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("booking-form");
const bookingForm = document.getElementById("bookingForm");

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
