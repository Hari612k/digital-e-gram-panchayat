import { auth, db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export async function logAction(action, details = {}) {
  if (!auth.currentUser) return;

  try {
    await addDoc(collection(db, "logs"), {
      userId: auth.currentUser.uid,
      email: auth.currentUser.email || "unknown",
      role: localStorage.getItem('userRole') || "unknown",
      action: action,
      details: details,
      timestamp: serverTimestamp(),
      page: window.location.pathname
    });
    console.log("Logged:", action);
  } catch (err) {
    console.error("Logging failed:", err);
  }
}