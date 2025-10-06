// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCUSP-d58z4tp6sCJs-NVzqnySYD-FhxE",
  authDomain: "portfolio-94a73.firebaseapp.com",
  projectId: "portfolio-94a73",
  storageBucket: "portfolio-94a73.firebasestorage.app",
  messagingSenderId: "854623034241",
  appId: "1:854623034241:web:5917f4531aac8c9c80e680",
  measurementId: "G-X5J0HY73XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
