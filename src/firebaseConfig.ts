// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1UBCV4399WOhWJu4EpQf7QKpGmJjny0",
  authDomain: "gottacatchemall-1d525.firebaseapp.com",
  projectId: "gottacatchemall-1d525",
  storageBucket: "gottacatchemall-1d525.appspot.com",
  messagingSenderId: "313452653117",
  appId: "1:313452653117:web:bb9d7c64930eb9d6aed854",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
