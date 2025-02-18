// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (DO NOT SHARE PUBLICLY)
const firebaseConfig = {
  apiKey: "AIzaSyBJysxa5QUg59cM7x9MBRB6F_rrCjPt-Q0",
  authDomain: "secret-sisters-2d459.firebaseapp.com",
  projectId: "secret-sisters-2d459",
  storageBucket: "secret-sisters-2d459.appspot.com",
  messagingSenderId: "86876567334",
  appId: "1:86876567334:web:a3bdb536567e755eeff3e7",
  measurementId: "G-F2WR0DHGB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export Firebase services for use in other files
export { db, analytics };
