import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBAS_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBAS_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBAS_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default firebase;