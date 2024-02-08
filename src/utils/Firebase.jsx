// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSGyfnlxWF3q38b43KTStj8mdasbU6yDo",
  authDomain: "netflixgpt-d0f51.firebaseapp.com",
  projectId: "netflixgpt-d0f51",
  storageBucket: "netflixgpt-d0f51.appspot.com",
  messagingSenderId: "1036499601029",
  appId: "1:1036499601029:web:e5792f5de98055aa150bec",
  measurementId: "G-CG532VZ8KT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
