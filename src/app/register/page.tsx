
'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, limit, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function RegisterPage() {
  const { auth, db } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Create the Auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Check if this is the first user to make them Super Admin
      const usersSnap = await getDocs(query(collection(db, 'users'), limit(1)));
      const isFirstUser = usersSnap.empty;

      const now = new Date().toISOString();

      // 3. Create the Firestore profile with foundation requirements
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        firstName,
        lastName,
        role: isFirstUser ? "Super Admin" : "Customer",
        isActive: true,
        lastLogin: now,
        loginHistory: arrayUnion(now),
        createdAt: now,
        updatedAt: serverTimestamp(),
      });

      toast({ 
        title: "Account Created", 
        description: isFirstUser 
          ? "Welcome, Super Admin! Redirecting to dashboard..." 
          : "Welcome to Bee & Dee! Redirecting to shop..." 
      });

      router.push(isFirstUser ? '/admin' : '/');
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({ 
        variant: "destructive", 
        title: "Registration failed", 
        description: error.message || "Please ensure your Firebase project is correctly configured."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center">
      <Card className="w-full max-w-md shadow-2xl rounded-[2rem]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter">Create Account</CardTitle>
          <CardDescription>Join the Bee & Dee Marketplace</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Jane" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full h-12 uppercase tracking-widest font-black mt-4" disabled={loading}>
              {loading ? "Creating Account..." : "Register Now"}
            </Button>
            <div className="text-center text-sm pt-4">
              Already have an account? <Link href="/login" className="text-accent font-bold hover:underline">Login here</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
