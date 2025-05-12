import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwcanAMLbeLhI9wtDFkTNXyo3RlnfTEvg",
  authDomain: "syncora-cdfa0.firebaseapp.com",
  projectId: "syncora-cdfa0",
  storageBucket: "syncora-cdfa0.firebasestorage.app",
  messagingSenderId: "811896090212",
  appId: "1:811896090212:web:d89901d880a002b3587971",
  measurementId: "G-KXK9MBNDCN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc, getDocs, deleteDoc, doc, onSnapshot };