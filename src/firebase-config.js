// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGPuVUE--ZIXXhA7bc4SFa4He_0X9oDHA",
    authDomain: "wd-projekat-baza.firebaseapp.com",
    projectId: "wd-projekat-baza",
    storageBucket: "wd-projekat-baza.appspot.com",
    messagingSenderId: "563987165140",
    appId: "1:563987165140:web:358e5c07511ed9c3e6b041",
    measurementId: "G-YJLKP0SEDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)