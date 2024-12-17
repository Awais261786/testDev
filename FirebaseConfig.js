// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTQm_DBVkV_6DWEKx8tdCd90NusI6klI",
  authDomain: "devbrain-a8b61.firebaseapp.com",
  projectId: "devbrain-a8b61",
  storageBucket: "devbrain-a8b61.firebasestorage.app",
  messagingSenderId: "945831734574",
  appId: "1:945831734574:web:d52ed792a82450b76f5ebf",
  measurementId: "G-1B7J5R9382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app);
const auth =getAuth(app);
export {db ,auth ,analytics};