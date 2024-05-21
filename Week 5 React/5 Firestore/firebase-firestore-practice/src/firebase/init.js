// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmaLqHP_fVnomyxqAx0HMLdVQU_ysqb4Q",
  authDomain: "fir-practice-b2c02.firebaseapp.com",
  projectId: "fir-practice-b2c02",
  storageBucket: "fir-practice-b2c02.appspot.com",
  messagingSenderId: "688145282502",
  appId: "1:688145282502:web:4d9edf18bab310c58faec7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
