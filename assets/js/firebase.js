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
var fname = document.querySelector("#fname");
var lname = document.querySelector("#lname");
var email = document.querySelector("#email");
var telephone = document.querySelector("#telephone");
var additionalComments = document.querySelector("#additionalComments");

function InsertData() {
  if(fname.value == "") {
    fname.style.border = "1px solid red";
    return false;
  } else {
    fname.style.border = "1px solid #ccc";
  }
  if (lname.value == "") {
    lname.style.border = "1px solid red";
    return false;
  } else {
    lname.style.border = "1px solid #ccc";
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
    return false;
  } else {
    email.style.border = "1px solid #ccc";
  }
  if (telephone.value == "") {
    telephone.style.border = "1px solid red";
    return false;
  } else {
    telephone.style.border = "1px solid #ccc";
  }
  set(ref(db, "Volunteer/" + uuidv4()), {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    telephone: telephone.value,
    additionalComments: additionalComments.value,
  });
  alert("Thank you for your interest in join Lorri's campaign. We will be in touch soon!");
  fname.value = "";
  lname.value = "";
  email.value = "";
  telephone.value = "";
  additionalComments.value = "";
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

if(joinBtn) {
  joinBtn.addEventListener("click", InsertData);
}

var name = document.querySelector("#join-name");
var email = document.querySelector("#join-email");
var phone = document.querySelector("#join-phone");

var joinFormBtn = document.querySelector("#join-now");

function InsertJoinData() {
  if(name.value == "") {
    name.style.border = "1px solid red";
    return false;
  } else {
    name.style.border = "1px solid #ccc";
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
    return false;
  } else {
    email.style.border = "1px solid #ccc";
  }
  if (phone.value == "") {
      phone.style.border = "1px solid red";
    return false;
  } else {
    phone.style.border = "1px solid #ccc";
  }
  set(ref(db, "Join/" + uuidv4()), {
    name: name.value,
    email: email.value,
    phone: phone.value,
  });
  alert("Thank you for your interest in join Lorri's campaign. We will be in touch soon!");
  name.value = "";
  email.value = "";
  phone.value = "";
}

if(joinFormBtn) {
  joinFormBtn.addEventListener("click", InsertJoinData);
}