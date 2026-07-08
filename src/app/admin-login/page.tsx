
'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const { auth } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Role check will happen in the /admin layout
      toast({ title: "Admin Authenticated", description: "Redirecting to dashboard..." });
      router.push('/admin');
    } catch (error: any) {
      toast({ 
        variant: "destructive", 
        title: "Access Denied", 
        description: error.message 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1120] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/5 border-white/10 text-white shadow-2xl rounded-[2.5rem] backdrop-blur-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto h-16 w-16 bg-accent rounded-full flex items-center justify-center shadow-accent/20 shadow-2xl">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-black uppercase tracking-tighter">Staff Portal</CardTitle>
          <CardDescription className="text-white/60">Authorized Personnel Only</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdminLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="admin-email" className="text-white/80">Staff ID / Email</Label>
              <Input 
                id="admin-email" 
                type="email" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/30 h-12"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-white/80">Security Key</Label>
              <Input 
                id="admin-password" 
                type="password" 
                className="bg-white/10 border-white/10 text-white h-12"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <Button type="submit" className="w-full h-14 bg-accent hover:bg-accent/90 text-primary font-black uppercase tracking-[0.2em] shadow-2xl" disabled={loading}>
              {loading ? "Verifying..." : "Unlock Dashboard"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
