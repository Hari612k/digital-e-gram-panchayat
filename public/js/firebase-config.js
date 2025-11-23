import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9CgMUuZoqacNEsmu5zz7WzwZTmdDfAUg",
  authDomain: "digital-e-gram-web.firebaseapp.com",
  projectId: "digital-e-gram-web",
  storageBucket: "digital-e-gram-web.appspot.com",  
  messagingSenderId: "814966073563",
  appId: "1:814966073563:web:eb864c695225faf9da44fe",
  measurementId: "G-STBZ8LJ284"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase initialized successfully!");
