// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4REs0CoUb8bAFi8E5igtvb2HwW88OEU0",
  authDomain: "art-craft-e1e48.firebaseapp.com",
  projectId: "art-craft-e1e48",
  storageBucket: "art-craft-e1e48.appspot.com",
  messagingSenderId: "57025819610",
  appId: "1:57025819610:web:558b8287cb10701b2846e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;