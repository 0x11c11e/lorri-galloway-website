// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkNK6v58rdOBo0j7a2kdJlzkudP-W7qLI",
  authDomain: "lorri-galloway-2.firebaseapp.com",
  databaseURL: "https://lorri-galloway-2-default-rtdb.firebaseio.com",
  projectId: "lorri-galloway-2",
  storageBucket: "lorri-galloway-2.appspot.com",
  messagingSenderId: "944882662390",
  appId: "1:944882662390:web:f90cbf9dc4e52b3ad625d7",
  measurementId: "G-19TC5JDZ34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

const db = getDatabase(app);

var joinBtn = document.querySelector("#joinBtn");
var days = document.querySelector("#days");

function InsertData() {
//   set(ref(db, "Volunteer"), {
//     name: "John Doe",
//   });
console.log(days)
}

joinBtn.addEventListener("click", InsertData);
