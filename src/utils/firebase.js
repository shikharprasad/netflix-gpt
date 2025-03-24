// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIJ3OwC050TgdnsDL2M7wCWPPRiV1aDSI",
  authDomain: "netflix-gpt-b50ed.firebaseapp.com",
  projectId: "netflix-gpt-b50ed",
  storageBucket: "netflix-gpt-b50ed.firebasestorage.app",
  messagingSenderId: "220359759912",
  appId: "1:220359759912:web:b65490855ab9671b54fd1d",
  measurementId: "G-N2BD7GFWVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
