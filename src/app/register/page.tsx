
'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, limit, serverTimestamp } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
  const { auth, db, isReady } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isReady || !auth || !db) {
      toast({ 
        variant: "destructive", 
        title: "System Initializing", 
        description: "Please wait a moment while we establish a secure connection." 
      });
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if this is the first user to assign Super Admin role
      const usersSnap = await getDocs(query(collection(db, 'users'), limit(1)));
      const isFirstUser = usersSnap.empty;

      const now = new Date().toISOString();

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        firstName,
        lastName,
        role: isFirstUser ? "Super Admin" : "Customer",
        isActive: true,
        lastLogin: now,
        loginHistory: [now],
        createdAt: now,
        updatedAt: serverTimestamp(),
      });

      toast({ 
        title: isFirstUser ? "Welcome, Super Admin" : "Account Created", 
        description: isFirstUser 
          ? "You have been granted full management access. Redirecting to admin core..." 
          : "Your Bee & Dee profile is ready."
      });

      router.push(isFirstUser ? '/admin' : '/');
    } catch (error: any) {
      toast({ 
        variant: "destructive", 
        title: "Registration Error", 
        description: error.message 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center">
      <Card className="w-full max-w-md shadow-2xl rounded-[3rem] border-primary/5">
        <CardHeader className="text-center space-y-4 pt-10">
          <div className="mx-auto h-16 w-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
             <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-4xl font-black uppercase tracking-tighter">Join Bee & Dee</CardTitle>
            <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Secure Your Luxury Experience</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-10 pb-12">
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-black tracking-widest ml-1">First Name</Label>
                <Input className="h-12 rounded-xl" placeholder="Lenny" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-black tracking-widest ml-1">Last Name</Label>
                <Input className="h-12 rounded-xl" placeholder="Wambui" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase font-black tracking-widest ml-1">Email Address</Label>
              <Input className="h-12 rounded-xl" type="email" placeholder="lenny@beedee.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] uppercase font-black tracking-widest ml-1">Password</Label>
              <Input className="h-12 rounded-xl" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full h-14 bg-primary text-white hover:bg-accent hover:text-primary transition-all rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl" disabled={loading}>
              {loading ? "Establishing Profile..." : "Create Account"}
            </Button>
            <div className="text-center text-[10px] font-bold uppercase tracking-widest text-primary/40 pt-4">
              Already have an account? <Link href="/login" className="text-accent hover:underline">Sign In</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
