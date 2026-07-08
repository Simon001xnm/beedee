'use client';

import { useEffect, useRef } from 'react';
import { useFirebase } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes for security

export function SessionManager() {
  const { auth } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = async () => {
    if (!auth.currentUser) return;
    
    try {
      await signOut(auth);
      toast({
        title: "Session Secured",
        description: "You have been logged out for your security due to inactivity.",
      });
      router.push('/login');
    } catch (error) {
      console.error("Session management failure:", error);
    }
  };

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleLogout, INACTIVITY_TIMEOUT);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        resetTimer();
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event => window.addEventListener(event, resetTimer));

        return () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          events.forEach(event => window.removeEventListener(event, resetTimer));
        };
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return null;
}
