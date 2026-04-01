// import { initializeApp, getApps } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();



// // lib/firebaseConfig.ts
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
// };

// // Initialize Firebase App only once
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // Auth
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// // Firestore
// export const db = getFirestore(app);


// // lib/firebaseConfig.ts
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   setPersistence,
//   browserLocalPersistence,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your Firebase configuration (from env vars)
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
// };

// // Initialize Firebase App once
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// // Auth + Google Provider
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// // Firestore
// export const db = getFirestore(app);

// /**
//  * Enable persistent login (survives refresh/browser close).
//  * Run this only in the browser.
//  */
// export async function initAuthPersistence(): Promise<void> {
//   if (typeof window === "undefined") return; // skip on server
//   try {
//     await setPersistence(auth, browserLocalPersistence);
//   } catch (err) {
//     console.error("Error setting persistence:", err);
//   }
// }


// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// Firebase config from .env.local
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// Initialize Firebase app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// ✅ Firestore
// Use long-polling only in development (helps Windows & restricted networks)
// Use default WebSockets in production (faster)
export const db =
  process.env.NODE_ENV === "development"
    ? initializeFirestore(app, { experimentalForceLongPolling: true })
    : getFirestore(app);

// ✅ Persistent login across refresh/browser close
export async function initAuthPersistence(): Promise<void> {
  if (typeof window === "undefined") return; // skip on server
  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (err) {
    console.error("Error setting persistence:", err);
  }
}
