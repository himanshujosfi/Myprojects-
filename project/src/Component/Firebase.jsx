// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhz9uPiZEz9GnJ1VUg_Hb6j5yg0WJkHfM",
    authDomain: "myproject-6a1a9.firebaseapp.com",
    projectId: "myproject-6a1a9",
    storageBucket: "myproject-6a1a9.appspot.com",
    messagingSenderId: "769812377332",
    appId: "1:769812377332:web:b5f4995c264e021912f8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export default app
