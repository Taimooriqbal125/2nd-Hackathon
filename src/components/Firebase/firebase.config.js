// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIThFNk0IXQlYu9RBiNw3CKXi_e2JI_0s",
  authDomain: "final-cf488.firebaseapp.com",
  projectId: "final-cf488",
  storageBucket: "final-cf488.firebasestorage.app",
  messagingSenderId: "192953553520",
  appId: "1:192953553520:web:9edd25f6e0ffd982f8dab5",
  measurementId: "G-RB1JBQJ6WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
