
'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

const STAFF_ROLES = ["Super Admin", "Manager", "Cashier", "Inventory Manager", "Customer Support"];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!profile || !STAFF_ROLES.includes(profile.role))) {
      router.push('/admin-login');
    }
  }, [profile, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a1120] text-white">
        <div className="flex flex-col items-center gap-4">
           <Shield className="h-10 w-10 text-accent animate-pulse" />
           <p className="text-[10px] font-black uppercase tracking-[0.4em]">Authenticating Secure Portal...</p>
        </div>
      </div>
    );
  }
  
  if (!profile) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f8fafc] w-full">
        <Sidebar className="border-r border-slate-200 bg-white shadow-xl">
          <SidebarHeader className="p-8">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-primary">B&D CORE</h1>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <p className="text-[9px] font-black text-primary/60 uppercase tracking-widest">{profile.role}</p>
            </div>
          </SidebarHeader>
          <SidebarContent className="px-4">
            <SidebarMenu>
              {[
                { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
                { name: 'Orders', icon: ShoppingCart, href: '/admin/orders' },
                { name: 'Inventory', icon: Package, href: '/admin/inventory' },
                { name: 'Staff & Users', icon: Users, href: '/admin/users' },
                { name: 'Settings', icon: Settings, href: '/admin/settings' },
              ].map((item) => (
                <SidebarMenuItem key={item.name} className="mb-1">
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-slate-500 hover:text-primary hover:bg-slate-50 transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            
            <div className="mt-auto pb-8 space-y-4">
               <Link href="/" className="flex items-center gap-3 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                  <ArrowLeft className="h-4 w-4" /> View Site
               </Link>
               <button className="w-full flex items-center gap-3 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors">
                  <LogOut className="h-4 w-4" /> Terminate Session
               </button>
            </div>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-10 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
