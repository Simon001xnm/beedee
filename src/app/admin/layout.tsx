
'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const adminNav = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { name: 'Orders', icon: ShoppingCart, href: '/admin/orders' },
  { name: 'Inventory', icon: Package, href: '/admin/inventory' },
  { name: 'Staff & Users', icon: Users, href: '/admin/users' },
  { name: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || (profile && !["Super Admin", "Manager", "Cashier", "Inventory Manager", "Customer Support"].includes(profile.role)))) {
      router.push('/admin-login');
    }
  }, [user, profile, loading, router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#0a1120] text-white">Authenticating Portal...</div>;
  
  if (!user || !profile) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-slate-50 w-full">
        <Sidebar className="border-r border-slate-200">
          <SidebarHeader className="p-6">
            <h1 className="text-xl font-black uppercase tracking-tighter text-primary">B&D Admin</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{profile.role}</p>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {adminNav.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center gap-3 px-6 py-3 font-bold text-slate-600 hover:text-primary hover:bg-slate-100 transition-all">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <div className="mt-auto p-6 space-y-4">
               <Link href="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary">
                  <ArrowLeft className="h-4 w-4" /> View Site
               </Link>
               <button className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-700">
                  <LogOut className="h-4 w-4" /> Logout
               </button>
            </div>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
