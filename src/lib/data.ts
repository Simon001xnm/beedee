import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return image ? { url: image.imageUrl, hint: image.imageHint } : { url: 'https://picsum.photos/seed/placeholder/600/600', hint: 'placeholder' };
}

export const categories: Category[] = [
  { id: 'mens-shoes', name: 'Men\'s Shoes', parentId: null, imageUrl: getImage('mens-sneakers').url, imageHint: getImage('mens-sneakers').hint },
  { id: 'ladies-shoes', name: 'Ladies\' Shoes', parentId: null, imageUrl: getImage('ladies-heels').url, imageHint: getImage('ladies-heels').hint },
  { id: 'sneakers', name: 'Sneakers', parentId: null, imageUrl: getImage('nike-air-max').url, imageHint: getImage('nike-air-max').hint },
  { id: 'football-boots', name: 'Football Boots', parentId: null, imageUrl: getImage('nike-mercurial').url, imageHint: getImage('nike-mercurial').hint },
  { id: 'handbags', name: 'Handbags', parentId: null, imageUrl: getImage('leather-handbags').url, imageHint: getImage('leather-handbags').hint },

  { id: 'mens-sneakers', name: 'Sneakers', parentId: 'mens-shoes', imageUrl: getImage('mens-sneakers').url, imageHint: getImage('mens-sneakers').hint },
  { id: 'formal-shoes', name: 'Formal Shoes', parentId: 'mens-shoes', imageUrl: getImage('mens-formal').url, imageHint: getImage('mens-formal').hint },
  { id: 'mens-boots', name: 'Boots', parentId: 'mens-shoes', imageUrl: getImage('mens-boots').url, imageHint: getImage('mens-boots').hint },
  { id: 'loafers', name: 'Loafers', parentId: 'mens-shoes', imageUrl: getImage('mens-loafers').url, imageHint: getImage('mens-loafers').hint },

  { id: 'ladies-sneakers', name: 'Sneakers', parentId: 'ladies-shoes', imageUrl: getImage('ladies-sneakers').url, imageHint: getImage('ladies-sneakers').hint },
  { id: 'heels', name: 'Heels', parentId: 'ladies-shoes', imageUrl: getImage('ladies-heels').url, imageHint: getImage('ladies-heels').hint },
  { id: 'sandals', name: 'Sandals', parentId: 'ladies-shoes', imageUrl: getImage('ladies-sandals').url, imageHint: getImage('ladies-sandals').hint },
  { id: 'ladies-boots', name: 'Boots', parentId: 'ladies-shoes', imageUrl: getImage('ladies-boots').url, imageHint: getImage('ladies-boots').hint },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Classic Men\'s Sneakers',
    price: 3499,
    images: [getImage('prod-1'), getImage('mens-sneakers')],
    description: 'Comfortable and stylish sneakers for everyday wear.',
    category: 'mens-shoes',
    subcategory: 'mens-sneakers',
    relatedProducts: ['prod-2', 'prod-9']
  },
  {
    id: 'prod-2',
    name: 'Leather Oxford Shoes',
    price: 4999,
    images: [getImage('prod-2'), getImage('mens-formal')],
    description: 'Elegant formal shoes, perfect for business and special occasions.',
    category: 'mens-shoes',
    subcategory: 'formal-shoes',
    relatedProducts: ['prod-1', 'prod-16']
  },
  {
    id: 'prod-3',
    name: 'Rugged Timberland Boots',
    price: 7999,
    images: [getImage('prod-3'), getImage('mens-boots')],
    description: 'Durable and waterproof boots for any adventure.',
    category: 'mens-shoes',
    subcategory: 'mens-boots',
    relatedProducts: ['prod-11', 'prod-12']
  },
  {
    id: 'prod-4',
    name: 'Suede Men\'s Loafers',
    price: 4299,
    images: [getImage('prod-4'), getImage('mens-loafers')],
    description: 'Casual yet sophisticated loafers for a relaxed look.',
    category: 'mens-shoes',
    subcategory: 'loafers',
    relatedProducts: ['prod-1', 'prod-2']
  },
  {
    id: 'prod-5',
    name: 'Chic Ladies Sneakers',
    price: 2199,
    images: [getImage('prod-5'), getImage('ladies-sneakers')],
    description: 'Fashion-forward sneakers to elevate your casual style.',
    category: 'ladies-shoes',
    subcategory: 'ladies-sneakers',
    relatedProducts: ['prod-6', 'prod-9']
  },
  {
    id: 'prod-6',
    name: 'Elegant Stiletto Heels',
    price: 3999,
    images: [getImage('prod-6'), getImage('ladies-heels')],
    description: 'Classic stiletto heels for a night out.',
    category: 'ladies-shoes',
    subcategory: 'heels',
    relatedProducts: ['prod-5', 'prod-17']
  },
  {
    id: 'prod-7',
    name: 'Summer Breeze Sandals',
    price: 1899,
    images: [getImage('prod-7'), getImage('ladies-sandals')],
    description: 'Light and comfortable sandals, perfect for warm weather.',
    category: 'ladies-shoes',
    subcategory: 'sandals',
    relatedProducts: ['prod-5', 'prod-18']
  },
  {
    id: 'prod-8',
    name: 'Knee-High Ladies Boots',
    price: 6499,
    images: [getImage('prod-8'), getImage('ladies-boots')],
    description: 'Stylish boots that make a statement.',
    category: 'ladies-shoes',
    subcategory: 'ladies-boots',
    relatedProducts: ['prod-3', 'prod-12']
  },
  {
    id: 'prod-9',
    name: 'Nike Air Max 90',
    price: 6999,
    images: [getImage('nike-air-max'), getImage('prod-9')],
    description: 'Iconic Nike Air Max sneakers with timeless style and comfort.',
    category: 'sneakers',
    subcategory: null,
    relatedProducts: ['prod-10', 'prod-1']
  },
  {
    id: 'prod-10',
    name: 'Adidas Yeezy Boost 350',
    price: 9999,
    images: [getImage('adidas-yeezy'), getImage('prod-10')],
    description: 'Limited edition Adidas Yeezy sneakers, a must-have for collectors.',
    category: 'sneakers',
    subcategory: null,
    relatedProducts: ['prod-9', 'prod-1']
  },
  {
    id: 'prod-11',
    name: 'Nike Mercurial Superfly',
    price: 8500,
    images: [getImage('nike-mercurial'), getImage('prod-11')],
    description: 'Top-tier football boots for maximum speed and control.',
    category: 'football-boots',
    subcategory: null,
    relatedProducts: ['prod-15']
  },
  {
    id: 'prod-12',
    name: 'Clarks Men\'s Boots',
    price: 7200,
    images: [getImage('clarks'), getImage('prod-12')],
    description: 'Comfortable and stylish boots from Clarks.',
    category: 'mens-shoes',
    subcategory: 'mens-boots',
    relatedProducts: ['prod-3', 'prod-8']
  },
  {
    id: 'prod-13',
    name: 'Genuine Leather Handbag',
    price: 5500,
    images: [getImage('leather-handbags'), getImage('prod-13')],
    description: 'A timeless handbag made from high-quality genuine leather.',
    category: 'handbags',
    subcategory: 'leather-handbags',
    relatedProducts: ['prod-14']
  },
  {
    id: 'prod-14',
    name: 'Calvin Klein Tote Bag',
    price: 7800,
    images: [getImage('branded-handbags'), getImage('prod-14')],
    description: 'A spacious and stylish tote bag from Calvin Klein.',
    category: 'handbags',
    subcategory: 'branded-handbags',
    relatedProducts: ['prod-13']
  },
  {
    id: 'prod-15',
    name: 'Adidas Predator Freak',
    price: 8200,
    images: [getImage('adidas-predator'), getImage('prod-15')],
    description: 'Dominate the field with the Adidas Predator Freak boots.',
    category: 'football-boots',
    subcategory: null,
    relatedProducts: ['prod-11']
  },
   {
    id: 'prod-16',
    name: 'Classic Brogues',
    price: 5299,
    images: [getImage('prod-16'), getImage('mens-formal')],
    description: 'Timeless leather brogues for a polished look.',
    category: 'mens-shoes',
    subcategory: 'formal-shoes',
    relatedProducts: ['prod-2', 'prod-4']
  },
  {
    id: 'prod-17',
    name: 'Platform Heels',
    price: 4599,
    images: [getImage('prod-17'), getImage('ladies-heels')],
    description: 'Comfortable yet stylish platform heels for any occasion.',
    category: 'ladies-shoes',
    subcategory: 'heels',
    relatedProducts: ['prod-6', 'prod-7']
  },
  {
    id: 'prod-18',
    name: 'Gladiator Sandals',
    price: 2499,
    images: [getImage('prod-18'), getImage('ladies-sandals')],
    description: 'Trendy gladiator sandals for a chic summer look.',
    category: 'ladies-shoes',
    subcategory: 'sandals',
    relatedProducts: ['prod-7', 'prod-5']
  }
];

export const getProducts = () => products;
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.category === categoryId || p.subcategory === categoryId);
}
export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getFeaturedProducts = (limit: number = 4) => products.slice(0, limit);
export const getRelatedProducts = (product: Product) => {
    return products.filter(p => product.relatedProducts.includes(p.id) && p.id !== product.id);
}
export const getRecommendedProductsByIds = (ids: string[]) => {
  return products.filter(p => ids.includes(p.id));
}
