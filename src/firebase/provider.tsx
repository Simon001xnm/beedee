
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseApp, initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigValid } from './config';

interface FirebaseContextType {
  app: FirebaseApp | null;
  auth: Auth | null;
  db: Firestore | null;
  isReady: boolean;
}

const FirebaseContext = createContext<FirebaseContextType>({
  app: null,
  auth: null,
  db: null,
  isReady: false
});

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<FirebaseContextType>({
    app: null,
    auth: null,
    db: null,
    isReady: false
  });

  useEffect(() => {
    if (!isFirebaseConfigValid) {
      console.warn("Firebase config is pending provisioning. Auth and Firestore features will be disabled until sync.");
      return;
    }

    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      const auth = getAuth(app);
      const db = getFirestore(app);
      
      setServices({ app, auth, db, isReady: true });
    } catch (err: any) {
      console.error("Firebase initialization failed:", err);
    }
  }, []);

  return (
    <FirebaseContext.Provider value={services}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  return context;
}
