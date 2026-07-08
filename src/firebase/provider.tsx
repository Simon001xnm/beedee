
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
    // Only attempt initialization if the keys are actually present
    if (!isFirebaseConfigValid) {
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

  // Show a professional provisioning screen if keys are missing
  if (!isFirebaseConfigValid || configError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 text-center">
        <div className="max-w-md space-y-6 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-primary/5">
          <div className="mx-auto h-20 w-20 bg-accent rounded-3xl flex items-center justify-center shadow-xl rotate-3">
             <div className="h-10 w-10 text-primary font-black text-3xl -rotate-3">!</div>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-black uppercase tracking-tighter text-primary leading-none">System Sync Required</h1>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {configError || "Your secure marketplace environment is preparing for launch. This occurs once as we provision your dedicated Firebase resources."}
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl text-[9px] font-mono text-slate-400 break-all uppercase tracking-widest border border-slate-100">
            CID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'PENDING_PROVISIONING'}
          </div>
          <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest pt-4">
            Refreshing in a few moments...
          </div>
        </div>
      </div>
    );
  }

  // Loading state while services are being set up
  if (!services) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-6">
          <div className="h-16 w-16 rounded-full border-[6px] border-primary/5 border-t-accent animate-spin"></div>
          <div className="text-center">
             <p className="font-black text-primary uppercase tracking-[0.4em] text-[10px]">Secure Core</p>
             <p className="text-slate-400 text-[9px] uppercase tracking-widest mt-1">Initializing Security Protocols...</p>
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
  if (context === undefined) throw new Error('useFirebase must be used within FirebaseProvider');
  return context;
}
