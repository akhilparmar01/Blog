// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm_OnCb0a8EQ-VHQnV50XOx5oMUB70jc0",
  authDomain: "myblog-165e8.firebaseapp.com",
  projectId: "myblog-165e8",
  storageBucket: "myblog-165e8.appspot.com",
  messagingSenderId: "887346212924",
  appId: "1:887346212924:web:ee88599a76c1b1f8791339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {fireDb, auth, storage}