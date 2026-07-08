
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
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    // If the project is not yet provisioned, we might not have keys.
    // In Firebase Studio, these are injected eventually.
    if (!isFirebaseConfigValid) {
      console.warn("Firebase configuration is pending or invalid.");
      return;
    }

    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
      const auth = getAuth(app);
      const db = getFirestore(app);
      setServices({ app, auth, db });
      setConfigError(null);
    } catch (err: any) {
      console.error("Firebase initialization failed:", err);
      setConfigError(err.message);
    }
  }, []);

  if (!isFirebaseConfigValid || configError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 text-center">
        <div className="max-w-md space-y-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-red-50">
          <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center">
             <div className="h-8 w-8 text-red-600 font-black text-2xl">!</div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-900">System Setup Required</h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              {configError || "Firebase configuration is missing. Please ensure your Firebase Project is linked and environment variables are active."}
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl text-[10px] font-mono text-slate-400 break-all uppercase tracking-widest">
            ERR: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'PENDING_PROVISIONING'}
          </div>
        </div>
      </div>
    );
  }

  if (!services) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center gap-6">
          <div className="h-14 w-14 rounded-full border-[6px] border-primary/10 border-t-primary animate-spin"></div>
          <div className="text-center">
             <p className="font-black text-primary uppercase tracking-[0.3em] text-[10px]">Secure Environment</p>
             <p className="text-slate-400 text-[9px] uppercase tracking-widest mt-1">Booting System Components...</p>
          </div>
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
