// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATMIol0BwsTti-zwfQ_NvoM59RBZ1f7o",
  authDomain: "tasks-4814a.firebaseapp.com",
  projectId: "tasks-4814a",
  storageBucket: "tasks-4814a.firebasestorage.app",
  messagingSenderId: "608999298612",
  appId: "1:608999298612:web:25569c7d40c8cfc61adc61",
  measurementId: "G-VDWFN0L8L3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById("register");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("register-email").value;
  const passwrd = document.getElementById("register-password").value;
  const confirmPasswrd = document.getElementById("confirm-password").value;

  createUserWithEmailAndPassword(auth, email, passwrd)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      if(passwrd === confirmPasswrd){
          alert("Creating Accout---");
          window.location.href = "location of the next page";

      }else{
        alert("Passwords do not match");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});
