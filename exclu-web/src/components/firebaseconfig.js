import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDTJjkM21818wQ4ojqNp12kWOf83Y-Iq68",
  authDomain: "login-sign-up-e-commers.firebaseapp.com",
  projectId: "login-sign-up-e-commers",
  storageBucket: "login-sign-up-e-commers.appspot.com",
  messagingSenderId: "324365521916",
  appId: "1:324365521916:web:52af592030a1353669d879",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)