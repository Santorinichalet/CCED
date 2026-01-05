# Slido-like mini live poll (HTML + Firebase)

This is a simple, static HTML app that lets people scan a QR code, answer 3 questions, and shows live results.

## Files
- `admin.html`  → create/update an event, set 3 questions, generate QR
- `index.html`  → participant answers (opened from QR)
- `results.html`→ live results dashboard
- `firebase-config.js` → paste your Firebase web app config
- `styles.css`  → UI styles

## Setup (Firebase)
1) Create a Firebase project
2) Enable **Firestore Database**
3) Add a Web App in Firebase console and copy the config
4) Paste config into `firebase-config.js`

## Firestore Rules (simple demo)
These rules are open (anyone with the link can write). For real events, you should harden them.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /events/{eventId} {
      allow read: if true;
      allow write: if true;

      match /responses/{responseId} {
        allow read: if true;
        allow write: if true;
      }
    }
  }
}
```

## Deploy
Any static host works:
- GitHub Pages
- Netlify
- Firebase Hosting

After deploying, open:
- `admin.html` to create an event and display the QR
- `results.html?event=XXXXXX` on the screen

## Notes
- Participant responses are stored as **one response per device per event** (using localStorage).
- If you change questions after collecting responses, reload the results page.
