import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASnC7lgmMBpYNwZ88dMrqTmtHrXAY2WB0",
  authDomain: "polinews-f0bc7.firebaseapp.com",
  projectId: "polinews-f0bc7",
  storageBucket: "polinews-f0bc7.appspot.com",
  messagingSenderId: "359783302356",
  appId: "1:359783302356:web:7ceb6de26cb2c32362a741",
  measurementId: "G-JS9JQG9S5V",
};
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
