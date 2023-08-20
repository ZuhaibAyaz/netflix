import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz4B_T7rHhZ7nby5JvSYeJFXcFMA6jNjI",
  authDomain: "react-netflix-clone-a2975.firebaseapp.com",
  projectId: "react-netflix-clone-a2975",
  storageBucket: "react-netflix-clone-a2975.appspot.com",
  messagingSenderId: "434751245650",
  appId: "1:434751245650:web:ed8a6c08d4ce024285be8b",
  measurementId: "G-5VVSGDBLZD"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);