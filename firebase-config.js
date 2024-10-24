// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU5cS6vQF4UrPvN_203RX66ytxqByXRPc",
  authDomain: "pokeapp-dc845.firebaseapp.com",
  projectId: "pokeapp-dc845",
  storageBucket: "pokeapp-dc845.appspot.com",
  messagingSenderId: "692412254227",
  appId: "1:692412254227:web:f9a943ab16ff11ac5e17e6",
  measurementId: "G-5GJW6YKR8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);