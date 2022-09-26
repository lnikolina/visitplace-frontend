import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import {
	getStorage,
	ref,
	listAll,
	uploadBytes,
	deleteObject,
	getDownloadURL,
} from "firebase/storage";
import {
	getFirestore,
	setDoc,
	doc,
	addDoc,
	collection,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAdlLsDp2lu8gtrVHzjugSVpU9mZbxJPh4",
	authDomain: "visitporec-3d39f.firebaseapp.com",
	projectId: "visitporec-3d39f",
	storageBucket: "visitporec-3d39f.appspot.com",
	messagingSenderId: "114947157265",
	appId: "1:114947157265:web:a5389e1373eddcf846f0b0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore(app);

export {
	auth,
	app,
	getAuth,
	getDownloadURL,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	storage,
	ref,
	listAll,
	uploadBytes,
	setDoc,
	doc,
	db,
	addDoc,
	collection,
	getDocs,
	deleteObject,
};
