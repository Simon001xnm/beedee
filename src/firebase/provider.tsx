
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseApp, initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigValid } from './config';

interface FirebaseContextType {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<FirebaseContextType | null>(null);

  useEffect(() => {
    // Attempt initialization. If config is missing, we'll handle it gracefully in hooks.
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      const auth = getAuth(app);
      const db = getFirestore(app);
      setServices({ app, auth, db });
    } catch (err) {
      console.warn("Firebase initialization deferred: Check configuration.", err);
    }
  }, []);

  // We render children immediately to avoid "hell no" waiting screens.
  // Hooks like useUser will handle the null state of services.
  return (
    <FirebaseContext.Provider value={services || {} as FirebaseContextType}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) throw new Error('useFirebase must be used within FirebaseProvider');
  return context;
}
