// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoodWBO4wmZgjIo3ogtlN9uLIeVG-N1PU",
  authDomain: "native-d7c79.firebaseapp.com",
  projectId: "native-d7c79",
  storageBucket: "native-d7c79.appspot.com",
  messagingSenderId: "112167222900",
  appId: "1:112167222900:web:66073065541da7c260db21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)