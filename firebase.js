// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgdOBQVBHzw3JVTBN38bh7p5BismK9slM",
  authDomain: "event-app-d0c0c.firebaseapp.com",
  projectId: "event-app-d0c0c",
  storageBucket: "event-app-d0c0c.appspot.com",
  messagingSenderId: "891988284385",
  appId: "1:891988284385:web:e01fd0fe24c547fa6038a0",
  measurementId: "G-Z27206ZJPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }