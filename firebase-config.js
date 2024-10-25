import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU5cS6vQF4UrPvN_203RX66ytxqByXRPc",
  authDomain: "pokeapp-dc845.firebaseapp.com",
  projectId: "pokeapp-dc845",
  storageBucket: "pokeapp-dc845.appspot.com",
  messagingSenderId: "692412254227",
  appId: "1:692412254227:web:f9a943ab16ff11ac5e17e6",
  measurementId: "G-5GJW6YKR8C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)