// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYq8nB4IKmn0fySLYT4IItCP9KQNfKa_g",
  authDomain: "autenticaci-nfirebasejc-main.firebaseapp.com",
  projectId: "autenticaci-nfirebasejc-main",
  storageBucket: "autenticaci-nfirebasejc-main.firebasestorage.app",
  messagingSenderId: "535950668559",
  appId: "1:535950668559:web:3015cb0c90ee4d185d847a",
  measurementId: "G-L16G1PY9TF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);

const googleProvider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

export {
  app,
  analytics,
  auth,
  loginWithEmail,
  registerWithEmail,
  logout,
  loginWithGoogle
};
