
 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAcyZH812EYB_aoyjL8z1gFGKF5727viCk",
  authDomain: "assignmant-11.firebaseapp.com",
  projectId: "assignmant-11",
  storageBucket: "assignmant-11.appspot.com",
  messagingSenderId: "479798882045",
  appId: "1:479798882045:web:ca0eb8c9adacae94fe9894",
  measurementId: "G-YLB36BBP2X"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)