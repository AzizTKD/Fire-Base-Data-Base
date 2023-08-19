
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {docs ,setDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {db , auth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzDBKBx6PLKeAFPNzRjPwKKlXwgO_9Ldo",
    authDomain: "hackathone-5e4d8.firebaseapp.com",
    projectId: "hackathone-5e4d8",
    storageBucket: "hackathone-5e4d8.appspot.com",
    messagingSenderId: "709107012355",
    appId: "1:709107012355:web:f3ca7c04e4862678cd0f36",
    measurementId: "G-S2R6MNP9VV"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
