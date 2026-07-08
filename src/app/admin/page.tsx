
'use client';

import { useUser } from '@/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, TrendingUp, Users, Package } from 'lucide-react';

export default function AdminDashboard() {
  const { profile } = useUser();

  const stats = [
    { name: 'Total Revenue', value: 'KSh 1.2M', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Active Orders', value: '24', icon: ShoppingBag, color: 'text-blue-600' },
    { name: 'Customers', value: '842', icon: Users, color: 'text-purple-600' },
    { name: 'Low Stock Items', value: '12', icon: Package, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter">Operations Dashboard</h1>
        <p className="text-slate-500">Welcome back, {profile?.firstName || 'Staff'}. Here's the store status.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-none shadow-xl rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.name}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black tracking-tighter">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">New order from Customer #0{i}82</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="text-sm font-black tracking-tight">KSh 4,499</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-3xl bg-primary text-white">
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tight">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm transition-all">Create New Order</button>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm transition-all">Restock Inventory</button>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm transition-all">Generate Daily Report</button>
            <button className="w-full py-3 bg-accent text-primary rounded-xl font-black text-sm transition-all mt-4">Broadcast Notification</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
