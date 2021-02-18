import admin from 'firebase-admin';

const config = {
  credential: admin.credential.cert({
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }),
  databaseURL: 'https://your-project-id.firebaseio.com',
};

if (!admin.apps.length) {
  admin.initializeApp(config);
} else {
  return firebase.app();
}
// console.log(firebase);

export default admin.firestore;
