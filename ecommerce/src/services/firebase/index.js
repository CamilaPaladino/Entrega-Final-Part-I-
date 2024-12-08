import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcIxad3_8r7ZocgIIauRbejXGLOOX-Vz0",
  authDomain: "curso-react-paladino.firebaseapp.com",
  projectId: "curso-react-paladino",
  storageBucket: "curso-react-paladino.firebasestorage.app",
  messagingSenderId: "840750693163",
  appId: "1:840750693163:web:abbea8a57a14fae264636e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)