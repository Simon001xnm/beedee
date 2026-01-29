
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '@/components/breadcrumb';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
       <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
       <h1 className="text-3xl font-headline font-bold my-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{cartItems.length} Item(s)</CardTitle>
                  <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-border">
                    {cartItems.map((product) => (
                      <li key={product.cartItemId} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                          <Image
                            src={product.images[0].url}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-foreground">
                              <h3>
                                <Link href={`/shop/product/${product.id}`}>{product.name}</Link>
                              </h3>
                              <p className="ml-4">{formatPrice(product.price * product.quantity)}</p>
                            </div>
                             <p className="mt-1 text-sm text-muted-foreground">
                                {product.selectedSize} / {product.selectedColor}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                             <div className="flex items-center border border-input rounded-md">
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.cartItemId, product.quantity - 1)}>
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <Input
                                  type="number"
                                  value={product.quantity}
                                  onChange={(e) => updateQuantity(product.cartItemId, parseInt(e.target.value) || 1)}
                                  className="h-8 w-12 text-center border-0 bg-transparent"
                                />
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(product.cartItemId, product.quantity + 1)}>
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>

                            <div className="flex">
                              <Button
                                variant="ghost"
                                type="button"
                                className="font-medium text-primary hover:text-primary/80"
                                onClick={() => removeFromCart(product.cartItemId)}
                              >
                                <Trash2 className="h-4 w-4 mr-1"/>
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>
                     <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                     <Separator />
                     <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="lg">
                        Proceed to Checkout
                    </Button>
                </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

