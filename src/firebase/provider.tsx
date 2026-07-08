
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseApp, initializeApp, getApps } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigValid } from './config';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

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

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigValid) {
      setError('PENDING_SYNC');
      return;
    }

    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      const auth = getAuth(app);
      const db = getFirestore(app);
      
      setServices({ app, auth, db, isReady: true });
      setError(null);
    } catch (err: any) {
      console.error("Firebase initialization failed:", err);
      setError(err.message || 'Initialization Error');
    }
  }, []);

  if (error === 'PENDING_SYNC') {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <Alert className="max-w-md border-accent/20 bg-white shadow-2xl rounded-[2rem] p-8">
          <Terminal className="h-6 w-6 text-accent" />
          <AlertTitle className="text-xl font-black uppercase tracking-tighter mt-4">System Sync Required</AlertTitle>
          <AlertDescription className="text-slate-500 mt-2 leading-relaxed font-medium">
            Your secure marketplace environment is preparing for launch. Please ensure your Firebase Project is linked and environment variables are active in the settings.
          </AlertDescription>
        </Alert>
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
  return context;
}
