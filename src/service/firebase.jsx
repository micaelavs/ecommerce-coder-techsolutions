// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApGme22tb7Hm6xFrjV_VsKeMpStu8ME-0",
  authDomain: "ecommerce-coder-techsolutions.firebaseapp.com",
  projectId: "ecommerce-coder-techsolutions",
  storageBucket: "ecommerce-coder-techsolutions.firebasestorage.app",
  messagingSenderId: "632807474469",
  appId: "1:632807474469:web:d769583c40f86cb6b046cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)