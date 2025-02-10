

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3Co0XpYFlUGwWP4lSK3Z2emYHRm890sA",
    authDomain: "first-crud-fire-base.firebaseapp.com",
    databaseURL: "https://first-crud-fire-base-default-rtdb.firebaseio.com",
    projectId: "first-crud-fire-base",
    storageBucket: "first-crud-fire-base.firebasestorage.app",
    messagingSenderId: "899508896209",
    appId: "1:899508896209:web:5eb8acda3932660b7460f0"
  };



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider };


export { db, collection, getDocs, query, where };