import admin from 'firebase-admin';

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_ADMIN_KEY, "base64").toString("utf8")
);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const adminDb = admin.firestore();
