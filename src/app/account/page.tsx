
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User, ShoppingBag, Heart, LogOut } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "My Account",
  description: "Manage your account details, orders, and wishlist.",
};

const accountNav = [
    { name: "My Profile", icon: User, href: "/account" },
    { name: "My Orders", icon: ShoppingBag, href: "#" },
    { name: "My Wishlist", icon: Heart, href: "#" },
    { name: "Log Out", icon: LogOut, href: "#" },
]

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'My Account' }]} />
      <h1 className="text-3xl font-headline font-bold my-6">My Account</h1>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
            <Card>
                <CardContent className="p-4">
                    <nav className="flex flex-col gap-1">
                        {accountNav.map(item => (
                            <Link key={item.name} href={item.href}>
                                <Button variant="ghost" className="w-full justify-start gap-2">
                                    <item.icon className="h-5 w-5 text-muted-foreground" />
                                    <span>{item.name}</span>
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-3">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your personal details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Full Name</h3>
                        <p className="text-muted-foreground">John Doe (Placeholder)</p>
                    </div>
                     <div>
                        <h3 className="font-semibold">Email Address</h3>
                        <p className="text-muted-foreground">john.doe@example.com (Placeholder)</p>
                    </div>
                     <div>
                        <h3 className="font-semibold">Phone Number</h3>
                        <p className="text-muted-foreground">+254 123 456789 (Placeholder)</p>
                    </div>
                    <Separator />
                     <Button>Edit Profile</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

