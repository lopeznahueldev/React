import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlbCM1d9QlitBUg1XvYYoh5RR3hWSDGgo",
    authDomain: "clothing-reactcoder.firebaseapp.com",
    projectId: "clothing-reactcoder",
    storageBucket: "clothing-reactcoder.appspot.com",
    messagingSenderId: "407350778090",
    appId: "1:407350778090:web:fb9a6eba5919eec4f11f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);