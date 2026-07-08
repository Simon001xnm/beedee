
'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useFirebase } from '../provider';

export type UserRole = "Super Admin" | "Manager" | "Cashier" | "Inventory Manager" | "Customer Support" | "Customer";

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  lastLogin?: string;
  isActive: boolean;
  loginHistory?: string[];
}

export function useUser() {
  const { auth, db } = useFirebase();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (!firebaseUser) {
        setProfile(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [auth]);

  useEffect(() => {
    if (!user || !db) {
      if (!user) setLoading(false);
      return;
    }

    const profileRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(profileRef, (snap) => {
      if (snap.exists()) {
        setProfile(snap.data() as UserProfile);
      }
      setLoading(false);
    }, (err) => {
      setLoading(false);
    });

    return unsubscribe;
  }, [user, db]);

  return { user, profile, loading };
}
