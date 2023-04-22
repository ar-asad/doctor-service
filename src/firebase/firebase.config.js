// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM8DeZSK9n-yAcweGyOBBtLKJRvIb6mbw",
    authDomain: "doctor-service-client.firebaseapp.com",
    projectId: "doctor-service-client",
    storageBucket: "doctor-service-client.appspot.com",
    messagingSenderId: "810440755653",
    appId: "1:810440755653:web:9f23663c734ee5f93563ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;