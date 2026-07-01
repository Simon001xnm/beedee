import type { Product, Category } from './types';

// IDs of products that should be exclusive to the Hero section
const HERO_ONLY_IDS: string[] = [];

// Exact filenames provided by user for the clearance collection
const CLEARANCE_IMAGES = [
  'WhatsApp Image 2026-06-17 at 22.21.40.jpeg',
  'Image 2026-06-17 at 22.21.42 (1).jpeg',
  'Image 2026-06-17 at 22.21.43.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.49.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.51 (1).jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.51.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.52.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.53 (1).jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.53.jpeg',
  'Image 2026-06-17 at 22.22.05.jpeg',
  'WhatsApp Image 2026-06-17 at 22.22.04.jpeg',
  'WhatsApp Image 2026-06-17 at 22.22.04 (1).jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.59 (1).jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.58.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.57.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.56.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.56 (1).jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.55.jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.55 (1).jpeg',
  'WhatsApp Image 2026-06-17 at 22.21.54.jpeg',
];

export const categories: Category[] = [
  { id: 'sneaker-lab', name: 'The Sneaker Lab', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800', imageHint: 'sneakers' },
  { id: 'gentlemens-quarters', name: 'Gentlemens Quarters', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800', imageHint: 'mens shoes' },
  { id: 'ladies-vault', name: 'The Ladies Vault', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800', imageHint: 'ladies shoes' },
  { id: 'mini-icons', name: 'Mini Icons', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800', imageHint: 'kids shoes' },
];

export const products: Product[] = [
  {
    id: 'timberland-premium-luxe',
    name: 'Timberland Premium Luxe',
    price: 4499,
    images: [
      { url: '/WhatsApp Image 2026-04-23 at 15.52.42.jpeg', hint: 'timberland premium luxe' },
      { url: '/WhatsApp Image 2026-04-23 at 15.52.43.jpeg', hint: 'timberland premium luxe side' }
    ],
    description: 'The pinnacle of rugged luxury. This Timberland Premium Luxe edition combines legendary durability with an elevated aesthetic.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['billionaire-boots', 'timberland-premium'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Wheat']
  },
  {
    id: 'asics-elite',
    name: 'Asics Elite',
    price: 3799,
    images: [
      { url: '/WhatsApp Image 2026-03-31 at 3.32.50 PM.jpeg', hint: 'asics elite' },
      { url: '/WhatsApp Image 2026-03-31 at 3.32.51 PM (1).jpeg', hint: 'asics elite view' }
    ],
    description: 'High-performance Asics Elite engineered for maximum comfort and urban style in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-performance-runner', 'nike-zoom'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Performance Multi']
  },
  ...CLEARANCE_IMAGES.map((filename, i) => ({
    id: `offer-${i}`,
    name: `Exclusive Clearance Item ${i + 1}`,
    price: 0,
    images: [{ url: `/${filename}`, hint: 'clearance offer' }],
    description: 'BEE & DEE STOCK CLEARANCE. Limited availability arrival. See image for detailed pricing and features.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: []
  })),
  {
    id: 'billionaire-boots',
    name: 'Billionaire Boots',
    price: 4499,
    images: [
      { url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM (1).jpeg', hint: 'billionaire boots' }
    ],
    description: 'Exquisite luxury boots crafted for those who demand the finest.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland-premium-luxe'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  }
];

export const getProducts = () => products;

export const getLandingExclusiveProducts = () => products.filter(p => p.id.startsWith('offer-'));

/**
 * Returns a slice of products that rotates based on the current hour.
 * Exclusively returns clearance offers for the landing page grid.
 */
export const getHourlyRotatingProducts = (limit: number = 12) => {
  const pool = getLandingExclusiveProducts();
  if (pool.length === 0) return [];
  
  const hoursSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60));
  const startIndex = (hoursSinceEpoch * limit) % pool.length;
  
  const result = [];
  for (let i = 0; i < limit; i++) {
    result.push(pool[(startIndex + i) % pool.length]);
  }
  
  return result;
};

export const getHeroProducts = () => products.filter(p => !p.id.startsWith('offer-')).slice(0, 8);

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => (p.category === categoryId || p.subcategory === categoryId));
}

export const getCategoryById = (id: string) => categories.find(c => c.id === id);

export const getRecommendedProductsByIds = (ids: string[]) => {
  return products.filter(p => ids.includes(p.id));
}
