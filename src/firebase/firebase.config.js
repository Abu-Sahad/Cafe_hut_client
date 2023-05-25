// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrXxc2nlcPZcEongMJdPE7JDZxeeiR9AE",
    authDomain: "chef-hut.firebaseapp.com",
    projectId: "chef-hut",
    storageBucket: "chef-hut.appspot.com",
    messagingSenderId: "307237086348",
    appId: "1:307237086348:web:5569a5ea6c4bc2b2fdc7a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app