
'use client';

import { useEffect, useState } from 'react';
import { doc, onSnapshot, DocumentReference, Firestore } from 'firebase/firestore';

export function useDoc<T = any>(db: Firestore, collectionPath: string, docId: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!db || !collectionPath || !docId) return;

    const docRef = doc(db, collectionPath, docId);
    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        setData(snap.exists() ? (snap.data() as T) : null);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [db, collectionPath, docId]);

  return { data, loading, error };
}
