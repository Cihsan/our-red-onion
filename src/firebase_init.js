// Import the functions you need from the SDKs you need
import { initializeApp,getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TIBVJvBdN9Fbuf5n3dGvbHfqvLdlQ_A",
  authDomain: "our-red-onion.firebaseapp.com",
  projectId: "our-red-onion",
  storageBucket: "our-red-onion.appspot.com",
  messagingSenderId: "549304746943",
  appId: "1:549304746943:web:66b2e05a9ea81a268f170a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth