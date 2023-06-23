/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
	apiKey: "AIzaSyBNYe1Tr5kIkpfI7Y78v2phrvQVP5PLYtE",
	authDomain: "instagram-clone-624ee.firebaseapp.com",
	projectId: "instagram-clone-624ee",
	storageBucket: "instagram-clone-624ee.appspot.com",
	messagingSenderId: "298173805279",
	appId: "1:298173805279:web:6cb0613fee7fea14252f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();