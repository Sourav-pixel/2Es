// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29tMWBv43ohD2KO9d-bSeWrX0JDxe2I0",
  authDomain: "sourav-demo.firebaseapp.com",
  projectId: "sourav-demo",
  storageBucket: "sourav-demo.appspot.com",
  messagingSenderId: "627263482368",
  appId: "1:627263482368:web:a1b08fe68252212598c6e5",
  measurementId: "G-1N09Q2TW6Y"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);