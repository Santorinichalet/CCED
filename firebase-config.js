// firebase-config.js (Firebase v8 + script tags)
var firebaseConfig = {
  apiKey: "AIzaSyA8ovxv3cGURJ_6XSbf3ICoMOPHDHLM9Sc",
  authDomain: "cced-74ca6.firebaseapp.com",
  projectId: "cced-74ca6",
  storageBucket: "cced-74ca6.firebasestorage.app",
  messagingSenderId: "940577322588",
  appId: "1:940577322588:web:86030574b4621973e55899",
  measurementId: "G-WCF55SSPKY"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Faster + offline cache
db.enablePersistence({ synchronizeTabs: true }).catch(function(err){
  // ignore (multiple tabs / unsupported)
});
