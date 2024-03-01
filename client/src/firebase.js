// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-13ada.firebaseapp.com",
  projectId: "mern-blog-13ada",
  storageBucket: "mern-blog-13ada.appspot.com",
  messagingSenderId: "357903038984",
  appId: "1:357903038984:web:2f1ab5c7b7d58e5c92efbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
