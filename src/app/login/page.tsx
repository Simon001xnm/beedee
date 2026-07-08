'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function LoginPage() {
  const { auth, db } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const now = new Date().toISOString();

      // Update login metadata
      const profileRef = doc(db, 'users', user.uid);
      await updateDoc(profileRef, {
        lastLogin: now,
        loginHistory: arrayUnion(now),
        updatedAt: serverTimestamp(),
      }).catch((err) => {
        console.warn("Profile update failed during login. This is expected if the profile hasn't been created yet.", err);
      });

      toast({ title: "Welcome back!", description: "You have successfully logged in." });
      router.push('/');
    } catch (error: any) {
      console.error("Login error:", error);
      toast({ 
        variant: "destructive", 
        title: "Login failed", 
        description: error.message || "Invalid credentials."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center">
      <Card className="w-full max-w-md shadow-2xl rounded-[2rem]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter">Login</CardTitle>
          <CardDescription>Access your Bee & Dee account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <Button type="submit" className="w-full h-12 uppercase tracking-widest font-black" disabled={loading}>
              {loading ? "Logging in..." : "Sign In"}
            </Button>
            <div className="text-center text-sm">
              Don't have an account? <Link href="/register" className="text-accent font-bold hover:underline">Register here</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
