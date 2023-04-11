import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_ADh-AT4DxunhUoovV5qz5JadPXYJdCc",
    authDomain: "todoreactfirebase-2f585.firebaseapp.com",
    projectId: "todoreactfirebase-2f585",
    storageBucket: "todoreactfirebase-2f585.appspot.com",
    messagingSenderId: "215227970592",
    appId: "1:215227970592:web:882ac0752f0e7ad67bb845"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);