
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
//import { initializeApp } from 'firebase/app';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { doc, setDoc, getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyAdlLsDp2lu8gtrVHzjugSVpU9mZbxJPh4",
  authDomain: "visitporec-3d39f.firebaseapp.com",
  projectId: "visitporec-3d39f",
  storageBucket: "visitporec-3d39f.appspot.com",
  messagingSenderId: "114947157265",
  appId: "1:114947157265:web:a5389e1373eddcf846f0b0"
};


// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = getAuth(app);

export { firebase, db, auth, storage };

