// admin.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Not logged in? Redirect to login page
    window.location.href = "admin-login.html";
  }
});

console.log("Admin panel script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
  apiKey: "AIzaSyC_OKwzsTJVBO9ffnsR47sKi3UjA57eu64",
  authDomain: "tabletrove-80cb0.firebaseapp.com",
  projectId: "tabletrove-80cb0",
  storageBucket: "tabletrove-80cb0.appspot.com",
  messagingSenderId: "124529385870",
  appId: "1:124529385870:web:d821d0a3c6649e7edd04df"
};

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const tableBody = document.getElementById("bookingTableBody");
  const contactTableBody = document.getElementById("contactTableBody");
  const searchInput = document.getElementById("search");

  let bookings = [];

  db.collection("bookings").orderBy("date").onSnapshot(snapshot => {
    bookings = snapshot.docs;
    renderBookings(bookings);
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = bookings.filter(doc =>
      doc.data().name.toLowerCase().includes(query)
    );
    renderBookings(filtered);
  });

  function renderBookings(filteredBookings) {
    tableBody.innerHTML = "";
    filteredBookings.forEach(doc => {
      const data = doc.data();
      const id = doc.id;
      const statusClass = data.status === "confirmed" ? "status-confirmed"
                        : data.status === "rejected" ? "status-rejected"
                        : "status-pending";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.contact}</td>
        <td>${data.date}</td>
        <td>${data.guests}</td>
        <td class="${statusClass}">${data.status}</td>
        <td>
          <button class="btn confirm" onclick="updateStatus('${id}', 'confirmed')">Confirm</button>
          <button class="btn reject" onclick="updateStatus('${id}', 'rejected')">Reject</button>
        </td>
        <td>
          <button class="btn delete" onclick="deleteBooking('${id}')">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  db.collection("contacts").orderBy("date", "desc").onSnapshot(snapshot => {
    contactTableBody.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.message}</td>
        <td>${new Date(data.date).toLocaleString()}</td>
      `;
      contactTableBody.appendChild(row);
    });
  });

  window.updateStatus = function (id, newStatus) {
    db.collection("bookings").doc(id).update({ status: newStatus });
  };

  window.deleteBooking = function (id) {
    if (confirm("Are you sure you want to delete this booking?")) {
      db.collection("bookings").doc(id).delete();
    }
  };
});
