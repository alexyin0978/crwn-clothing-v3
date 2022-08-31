// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyB498TWr2vizRll7D1xUsa3o889yd1dTA8",
  authDomain: "crwn-clothing-v3.firebaseapp.com",
  projectId: "crwn-clothing-v3",
  storageBucket: "crwn-clothing-v3.appspot.com",
  messagingSenderId: "236207162414",
  appId: "1:236207162414:web:fe889e349de974a9d58bbf"
};

const firebaseBackendApp = initializeApp(firebaseConfig);

const db = getFirestore  ();

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',  //每次provider被trigger, user都必須選擇1個account
});

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};