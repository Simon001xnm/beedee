'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseApp, initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

interface FirebaseContextType {
  app: FirebaseApp | null;
  auth: Auth | null;
  db: Firestore | null;
}

const FirebaseContext = createContext<FirebaseContextType>({
  app: null,
  auth: null,
  db: null
});

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<FirebaseContextType>({
    app: null,
    auth: null,
    db: null
  });

  useEffect(() => {
    try {
      // Ensure we don't initialize multiple times
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      const auth = getAuth(app);
      const db = getFirestore(app);
      
      setServices({ app, auth, db });
    } catch (err) {
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
