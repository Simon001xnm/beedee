
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
import { ShieldAlert, Fingerprint } from 'lucide-react';

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
      toast({ title: "Authorized", description: "Redirecting to management core..." });
      router.push('/admin');
    } catch (error: any) {
      toast({ 
        variant: "destructive", 
        title: "Access Denied", 
        description: "Invalid security credentials or insufficient permissions." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Security Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <Card className="w-full max-w-md bg-white/5 border-white/10 text-white shadow-2xl rounded-[3rem] backdrop-blur-2xl relative z-10">
        <CardHeader className="text-center space-y-6 pt-12">
          <div className="mx-auto h-20 w-20 bg-accent rounded-3xl rotate-12 flex items-center justify-center shadow-accent/20 shadow-2xl">
            <Fingerprint className="h-10 w-10 text-primary -rotate-12" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-4xl font-black uppercase tracking-tighter">Staff Portal</CardTitle>
            <CardDescription className="text-white/40 font-bold uppercase tracking-[0.3em] text-[9px]">
               Secure Management Access Only
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-12">
          <form onSubmit={handleAdminLogin} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email" className="text-white/60 text-[10px] font-black uppercase tracking-widest ml-4">Personnel Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-14 rounded-2xl px-6 focus:bg-white/10 transition-all"
                  placeholder="name@beedee.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password" className="text-white/60 text-[10px] font-black uppercase tracking-widest ml-4">Security Key</Label>
                <Input 
                  id="admin-password" 
                  type="password" 
                  className="bg-white/5 border-white/10 text-white h-14 rounded-2xl px-6 focus:bg-white/10 transition-all"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <Button type="submit" className="w-full h-16 bg-accent hover:bg-accent/90 text-primary font-black uppercase tracking-[0.3em] text-xs rounded-2xl shadow-2xl transition-all active:scale-95" disabled={loading}>
                {loading ? "Verifying..." : "Initialize Core"}
              </Button>
              <div className="flex items-center gap-3 justify-center text-white/30">
                 <ShieldAlert className="h-3 w-3" />
                 <span className="text-[9px] font-bold uppercase tracking-widest">Encrypted Session Data</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
