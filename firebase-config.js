// firebase-config.js
// 1) Paste your Firebase config below (from Firebase Console > Project settings > Your apps).
// 2) Make sure Firestore is enabled.
// 3) If you use different Firebase project for this CCED Slido-like app, update it here.

const firebaseConfig = {
  // apiKey: "....",
  // authDomain: "....",
  // projectId: "....",
  // storageBucket: "....",
  // messagingSenderId: "....",
  // appId: "...."
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
