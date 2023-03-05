// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBgT-eo1u9mFjmau1U7niMrgEuDtjaBl8k",
  authDomain: "clone-1452.firebaseapp.com",
  projectId: "clone-1452",
  storageBucket: "clone-1452.appspot.com",
  messagingSenderId: "992005193837",
  appId: "1:992005193837:web:097246542913a26d407f64",
  measurementId: "G-7FBZ5P360B",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
