// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDidRn4SJzMoLgy5AQ2ZYbkPrGk7wUK6rk",
  authDomain: "dragon-news-abaed.firebaseapp.com",
  projectId: "dragon-news-abaed",
  storageBucket: "dragon-news-abaed.firebasestorage.app",
  messagingSenderId: "90786568970",
  appId: "1:90786568970:web:06925534e1666a7600b8f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;