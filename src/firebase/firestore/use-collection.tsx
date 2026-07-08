
'use client';

import { useEffect, useState } from 'react';
import { collection, onSnapshot, Query, Firestore, query } from 'firebase/firestore';

export function useCollection<T = any>(db: Firestore, collectionPath: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!db || !collectionPath) return;

    const colRef = collection(db, collectionPath);
    const unsubscribe = onSnapshot(
      colRef,
      (snap) => {
        const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
        setData(items);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [db, collectionPath]);

  return { data, loading, error };
}
