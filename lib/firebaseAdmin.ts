// // lib/firebaseAdmin.ts
// import * as admin from "firebase-admin";

// if (!admin.apps.length) {
//   const projectId = process.env.FIREBASE_PROJECT_ID;
//   const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
//   const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

//   if (!projectId || !clientEmail || !privateKey) {
//     throw new Error("Missing Firebase Admin credentials");
//   }

//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId,
//       clientEmail,
//       privateKey,
//     }),
//   });
// }

// export const adminDb = admin.firestore();
// lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

/**
 * Initializes a single Firebase Admin app instance.
 * Requires FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY
 * to be present in your environment (.env.local for dev or hosting provider for prod).
 */
if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  // Replace escaped newlines with actual newlines for the private key
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin credentials. " +
      "Check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY."
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

export const adminDb = admin.firestore();
