// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8CEmA7H8wado4gp_ZJg-RXKXv9y-HJM",
  authDomain: "warmpaws-c3bd1.firebaseapp.com",
  projectId: "warmpaws-c3bd1",
  storageBucket: "warmpaws-c3bd1.firebasestorage.app",
  messagingSenderId: "357328645983",
  appId: "1:357328645983:web:1871772c8f6172f68010ea",
  measurementId: "G-B9S7JXM588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app