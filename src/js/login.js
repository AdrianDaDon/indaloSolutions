// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: window.env.API_KEY,
    authDomain:  window.env.AUTH_DOMAIN,
    projectId:  window.env.PROJECT_ID,
    storageBucket: window.env.STOROAGE_BUCKET,
    messagingSenderId:  window.env.MESSAGING_SENDER_ID,
    appId:  window.env.APP_ID,
    measurementId:  window.env.MEASUREMENT_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById("register");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const passwrd = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, passwrd)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      alert("Sigin Account---");
      window.location.href = "location of the next page";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});
