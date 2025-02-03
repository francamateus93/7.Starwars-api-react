import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9VR_W9Ie9Kri9M4BeGzfFHAmDBKJPTkI",
  authDomain: "starwars-api-project.firebaseapp.com",
  projectId: "starwars-api-project",
  storageBucket: "starwars-api-project.firebasestorage.app",
  messagingSenderId: "985575723382",
  appId: "1:985575723382:web:1ceaaf91b50b5971fd2a57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
