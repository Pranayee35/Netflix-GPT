import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4HYg-wIIYI0aJb7v9l8fVbmBPZxSI8lI",
  authDomain: "netflixgpt-a2f0a.firebaseapp.com",
  projectId: "netflixgpt-a2f0a",
  storageBucket: "netflixgpt-a2f0a.appspot.com",
  messagingSenderId: "713993069123",
  appId: "1:713993069123:web:8bd7c9295b214656c12af6",
  measurementId: "G-CVMQY4BYXE",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
