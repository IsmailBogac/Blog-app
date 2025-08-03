// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_OQM31tLy3G0b15ImakOmQwOZDQ42ARY",
  authDomain: "blog-auth-761f2.firebaseapp.com",
  projectId: "blog-auth-761f2",
  storageBucket: "blog-auth-761f2.firebasestorage.app",
  messagingSenderId: "419873961543",
  appId: "1:419873961543:web:4143d1a717a94ed7656362",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ Firestore başlatıldı ve dışa aktarıldı
export const auth = getAuth(app);
export const storage = getStorage(app);
