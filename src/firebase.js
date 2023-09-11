// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGw-177jemIA5eULa-MD1PKmaoX9yJCDE",
  authDomain: "login-page-auth-c8e60.firebaseapp.com",
  projectId: "login-page-auth-c8e60",
  storageBucket: "login-page-auth-c8e60.appspot.com",
  messagingSenderId: "18693614356",
  appId: "1:18693614356:web:46579786f49520be493001",
  measurementId: "G-MXEWT8XDK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);