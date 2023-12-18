// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Add Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhnaRc1g4eJqg0Zu9LJfNsYyxhVCJP_AI",
    authDomain: "to-do-list-react-app-d1a38.firebaseapp.com",
    projectId: "to-do-list-react-app-d1a38",
    storageBucket: "to-do-list-react-app-d1a38.appspot.com",
    messagingSenderId: "398661777913",
    appId: "1:398661777913:web:d1b7ec0229ec5cb2b82528"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};