'use client';

import { useEffect, useRef } from 'react';
import { useFirebase } from '@/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes for security

export function SessionManager() {
  const { auth, isReady } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = React.useCallback(async () => {
    if (!auth || !auth.currentUser) return;
    
    try {
      await signOut(auth);
      toast({
        title: "Session Secured",
        description: "You have been logged out for your security due to inactivity.",
      });
      router.push('/login');
    } catch (error) {
      // Silently fail to avoid UI disruption
    }
  }, [auth, router, toast]);

  const resetTimer = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleLogout, INACTIVITY_TIMEOUT);
  }, [handleLogout]);

  useEffect(() => {
    if (!isReady || !auth) return;

    // Correct Modular SDK Syntax: onAuthStateChanged(auth, ...)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resetTimer();
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        const handler = () => resetTimer();
        
        events.forEach(event => window.addEventListener(event, handler));

        return () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          events.forEach(event => window.removeEventListener(event, handler));
        };
      } else {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    });

    return () => unsubscribe();
  }, [auth, isReady, resetTimer]);

  return null;
}
import React from 'react';