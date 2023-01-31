


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDELRw113EqVS4QeutqNqKurY7epdFSDc",
  authDomain: "jansmsfinal.firebaseapp.com",
  databaseURL: "https://jansmsfinal-default-rtdb.firebaseio.com",
  projectId: "jansmsfinal",
  storageBucket: "jansmsfinal.appspot.com",
  messagingSenderId: "673936993779",
  appId: "1:673936993779:web:eca998081f7f092e1e7686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
export default db;
