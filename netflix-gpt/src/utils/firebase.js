// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdC1vvu9tLRntkOl8IEkxvj71i0vdykBo",
  authDomain: "netflixgpt26-ce481.firebaseapp.com",
  projectId: "netflixgpt26-ce481",
  storageBucket: "netflixgpt26-ce481.firebasestorage.app",
  messagingSenderId: "79130740935",
  appId: "1:79130740935:web:74d43f981e6b60183dd6e2",
  measurementId: "G-T97JK3WHD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();