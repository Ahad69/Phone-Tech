// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
  // apiKey: "AIzaSyBwxZ1T4gS3kDXL76UsBGrB_61Zy4hPLqE",
  // authDomain: "assignment-12-42953.firebaseapp.com",
  // projectId: "assignment-12-42953",
  // storageBucket: "assignment-12-42953.appspot.com",
  // messagingSenderId: "888250587282",
  // appId: "1:888250587282:web:09bffb6521166c5c9fee4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;