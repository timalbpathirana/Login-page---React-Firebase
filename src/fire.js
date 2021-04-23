import React from "react";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDjQHGnLSKcrXb3FPdMwXRxl9f55Tx6mX8",
  authDomain: "loginapp-3e7b9.firebaseapp.com",
  projectId: "loginapp-3e7b9",
  storageBucket: "loginapp-3e7b9.appspot.com",
  messagingSenderId: "551759869234",
  appId: "1:551759869234:web:ea598de4720567513c532b",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
