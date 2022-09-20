// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' //for firestore
import { getAuth, GoogleAuthProvider } from 'firebase/auth' //for auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDngptpAz3z9Q8_pnM_4sTNakNwB5mU1wI",
    authDomain: "blog-app-5a069.firebaseapp.com",
    projectId: "blog-app-5a069",
    storageBucket: "blog-app-5a069.appspot.com",
    messagingSenderId: "643984174896",
    appId: "1:643984174896:web:549d4156dc58205d4422f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// created Google Auth and firebase at Google Firebase and exported here with the app.
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();