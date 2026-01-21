// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js';
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG6fHAjmIHiG70x0v9TY_Q6sH6TRHA3Lw",
  authDomain: "flags-fe25-demo.firebaseapp.com",
  databaseURL: "https://flags-fe25-demo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flags-fe25-demo",
  storageBucket: "flags-fe25-demo.firebasestorage.app",
  messagingSenderId: "1020455362189",
  appId: "1:1020455362189:web:e5af3073a3d799a97b8cc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const usersRef = ref(db, '/chatusers/users/');

export const userMessageRef = ref(db, '/chatusers/users/messages/message')