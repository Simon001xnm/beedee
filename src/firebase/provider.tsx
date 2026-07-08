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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigValid) {
      setError("Firebase configuration is missing or invalid. Please check your environment variables.");
      return;
    }

    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      const auth = getAuth(app);
      const db = getFirestore(app);
      setServices({ app, auth, db });
    } catch (err: any) {
      console.error("Firebase initialization failed:", err);
      setError(err.message);
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-red-600">Configuration Error</h1>
          <p className="text-slate-600">{error}</p>
          <p className="text-sm text-slate-400">Ensure NEXT_PUBLIC_FIREBASE_API_KEY and other variables are set.</p>
        </div>
      </div>
    );
  }

  if (!services) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <p className="font-bold text-primary uppercase tracking-widest text-xs">Initializing Secure Environment...</p>
        </div>
      </div>
    );
  }

  return (
    <FirebaseContext.Provider value={services}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) throw new Error('useFirebase must be used within FirebaseProvider');
  return context;
}
