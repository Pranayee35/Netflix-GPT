// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4HYg-wIIYI0aJb7v9l8fVbmBPZxSI8lI",
  authDomain: "netflixgpt-a2f0a.firebaseapp.com",
  projectId: "netflixgpt-a2f0a",
  storageBucket: "netflixgpt-a2f0a.firebasestorage.app",
  messagingSenderId: "713993069123",
  appId: "1:713993069123:web:8bd7c9295b214656c12af6",
  measurementId: "G-CVMQY4BYXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();