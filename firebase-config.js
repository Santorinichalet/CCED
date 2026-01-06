// firebase-config.js (Firebase v8 + script tags)
// This project uses Firebase CDN scripts (firebase-app.js / firebase-firestore.js).
// Do NOT use `export` here.

var firebaseConfig = {
  apiKey: "AIzaSyA8ovxv3cGURJ_6XSbf3ICoMOPHDHLM9Sc",
  authDomain: "cced-74ca6.firebaseapp.com",
  projectId: "cced-74ca6",
  storageBucket: "cced-74ca6.firebasestorage.app",
  messagingSenderId: "940577322588",
  appId: "1:940577322588:web:86030574b4621973e55899",
  measurementId: "G-WCF55SSPKY"
};

// Initialize Firebase once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore handle used by admin.html / index.html / results.html
var db = firebase.firestore();
