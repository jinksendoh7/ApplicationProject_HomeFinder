
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF0_4F-nJRoJhzJD97n2oIKpOSGT2YmnI",
    authDomain: "homefinder-appmanagement.firebaseapp.com",
    projectId: "homefinder-appmanagement",
    storageBucket: "homefinder-appmanagement.appspot.com",
    messagingSenderId: "846988134647",
    appId: "1:846988134647:web:13d0abd25ff0185b872bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);