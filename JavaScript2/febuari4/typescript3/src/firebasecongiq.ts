import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBG6fHAjmIHiG70x0v9TY_Q6sH6TRHA3Lw",
  authDomain: "flags-fe25-demo.firebaseapp.com",
  databaseURL: "https://flags-fe25-demo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flags-fe25-demo",
  storageBucket: "flags-fe25-demo.firebasestorage.app",
  messagingSenderId: "1020455362189",
  appId: "1:1020455362189:web:e5af3073a3d799a97b8cc4"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
// export const booksRef = ref(db, '/books');