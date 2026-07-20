// Firebase configuration (compatible with <script> tags on GitHub Pages)
window.firebaseConfig = {
  apiKey: "AIzaSyA8ovxv3cGURJ_6XSbf3ICoMOPHDHLM9Sc",
  authDomain: "cced-74ca6.firebaseapp.com",
  projectId: "cced-74ca6",
  storageBucket: "cced-74ca6.firebasestorage.app",
  messagingSenderId: "940577322588",
  appId: "1:940577322588:web:86030574b4621973e55899",
  measurementId: "G-WCF55SSPKY"
};

// Initialize Firebase (once)
try {
  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(window.firebaseConfig);
  }
} catch (e) {
  // ignore duplicate init
}

// Create Firestore instance and expose globally
window.db = firebase.firestore();

// Force long-polling instead of WebChannel streaming.
// Fixes "Could not reach Cloud Firestore backend" on networks/proxies
// that block or interfere with streaming connections (common on some
// corporate networks, VPNs, and ISPs). Must be set before any other
// Firestore call.
window.db.settings({
  experimentalForceLongPolling: true,
  useFetchStreams: false
});
