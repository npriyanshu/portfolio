// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwTEHrtygqoIogVvamspw_de_4K9tMxm0",
  authDomain: "pinchu-portfolio.firebaseapp.com",
  projectId: "pinchu-portfolio",
  storageBucket: "pinchu-portfolio.appspot.com",
  messagingSenderId: "75367216419",
  appId: "1:75367216419:web:cb384f0bab31c62b018896"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();