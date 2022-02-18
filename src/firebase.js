// npm install -g firebase-tools
// do this to install firebase-tools or it will give errors

import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCc891Gz63I0grHkmdlBFX2DdPyzJwsp14",
	authDomain: "disney-clone-c7b69.firebaseapp.com",
	projectId: "disney-clone-c7b69",
	storageBucket: "disney-clone-c7b69.appspot.com",
	messagingSenderId: "199078856236",
	appId: "1:199078856236:web:31fb89c5415576afe37389",
	measurementId: "G-NH0SY6YE6M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Detect Auth state
// onAuthStateChanged(auth, user => {
// 	if(user != null) {
// 		console.log('logged in');
// 	}else{
// 		console.log('No user');
// 	}
// })

// signInWithPopup(auth, new GoogleAuthProvider());

export { auth, storage };
export default db;