
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getStorage, ref, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdlLsDp2lu8gtrVHzjugSVpU9mZbxJPh4",
  authDomain: "visitporec-3d39f.firebaseapp.com",
  projectId: "visitporec-3d39f",
  storageBucket: "visitporec-3d39f.appspot.com",
  messagingSenderId: "114947157265",
  appId: "1:114947157265:web:a5389e1373eddcf846f0b0"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export {auth,app,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,storage,ref,listAll}











