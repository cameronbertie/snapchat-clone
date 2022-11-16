import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkdF8WBNV4UEALbyZGHFOmaJm8ILtG3e0",
  authDomain: "snapchat-clone-332dd.firebaseapp.com",
  projectId: "snapchat-clone-332dd",
  storageBucket: "snapchat-clone-332dd.appspot.com",
  messagingSenderId: "764883809191",
  appId: "1:764883809191:web:413bb6144e7c98b24c3c82",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
