// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2S4z-ViKKBMAhZkTgHCFWn2CufgPz3aY",
  authDomain: "vrcarteras.firebaseapp.com",
  projectId: "vrcarteras",
  storageBucket: "vrcarteras.appspot.com",
  messagingSenderId: "635475674277",
  appId: "1:635475674277:web:a20ee142acf98deedd394c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)