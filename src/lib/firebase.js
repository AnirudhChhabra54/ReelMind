// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkX7OxdoOeu8Qeb9xY0fsii5HJUokyaxM",
  authDomain: "snapskill-54e39.firebaseapp.com",
  projectId: "snapskill-54e39",
  storageBucket: "snapskill-54e39.firebasestorage.app",
  messagingSenderId: "440980033334",
  appId: "1:440980033334:web:e80502cb2eb2ac5e16ed97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


