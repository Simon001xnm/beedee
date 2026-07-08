import type { Product, Category } from './types';

// Visual clearance assets provided by user
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
  'WhatsApp Image 2026-02-07 at 1.08.30 PM.jpeg',
  'WhatsApp Image 2026-02-07 at 1.08.30 PM (1).jpeg',
  'WhatsApp Image 2026-02-07 at 1.08.04 PM.jpeg',
  'WhatsApp Image 2026-02-07 at 1.08.04 PM (3).jpeg',
  'WhatsApp Image 2026-02-07 at 1.08.04 PM (2).jpeg',
  'WhatsApp Image 2026-02-07 at 1.08.04 PM (1).jpeg',
  'WhatsApp Image 2026-02-07 at 1.08.03 PM.jpeg',
  'WhatsApp Image 2026-02-07 at 11.40.57 AM.jpeg',
  'WhatsApp Image 2026-02-07 at 11.40.57 AM (1).jpeg',
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
    id: 'billionaire-boots',
    name: 'Billionaire Boots',
    price: 4499,
    images: [{ url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM (1).jpeg', hint: 'billionaire boots' }],
    description: 'Exquisite luxury boots crafted for those who demand the finest footwear in Nairobi.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland-premium-luxe'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'max-air',
    name: 'Max Air',
    price: 3999,
    images: [{ url: '/WhatsApp Image 2026-02-07 at 1.08.30 PM.jpeg', hint: 'max air' }],
    description: 'Experience superior cushioning and legendary style with the Max Air classic.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'timberland-boots',
    name: 'Timberland Boots',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-07 at 1.08.04 PM.jpeg', hint: 'timberland' }],
    description: 'Classic rugged durability built for the urban explorer.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland-premium-luxe'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Tan']
  },
  {
    id: 'under-armour',
    name: 'Under Armour',
    price: 3799,
    images: [{ url: '/WhatsApp Image 2026-02-07 at 11.40.57 AM.jpeg', hint: 'under armour' }],
    description: 'High-performance athletic sneakers designed for endurance and comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-vomero'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-vomero',
    name: 'Nike Vomero',
    price: 3799,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 5.36.55 PM.jpeg', hint: 'nike vomero' }],
    description: 'Premium running comfort with a modern silhouette.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-performance-runner'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Multi-color']
  },
  {
    id: 'jordan-3',
    name: 'Jordan 3',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 3.50.30 PM.jpeg', hint: 'jordan 3' }],
    description: 'Legendary silhouette featuring iconic elephant print and premium leather.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-voodoo'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Multi']
  },
  {
    id: 'timberland-premium-luxe',
    name: 'Timberland Premium Luxe',
    price: 4499,
    images: [{ url: '/WhatsApp Image 2026-04-23 at 15.52.42.jpeg', hint: 'timberland premium luxe' }],
    description: 'The pinnacle of rugged luxury, featuring handcrafted leather.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['billionaire-boots', 'timberland-boots'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Wheat']
  },
  {
    id: 'asics-elite',
    name: 'Asics Elite',
    price: 3799,
    images: [{ url: '/WhatsApp Image 2026-03-31 at 3.32.50 PM.jpeg', hint: 'asics elite' }],
    description: 'High-performance Asics Elite engineered for maximum comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Performance Multi']
  },
  ...CLEARANCE_IMAGES.map((filename, i) => ({
    id: `offer-${i}`,
    name: `Event Exclusive #${i + 1}`,
    price: 0,
    images: [{ url: `/${filename}`, hint: 'clearance offer' }],
    description: 'BEE & DEE STOCK CLEARANCE. Event Pricing. See image for details.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: []
  })),
];

export const getProducts = () => products;

export const getHourlyRotatingProducts = (limit: number = 12) => {
  const pool = products; 
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
export const getProductsByCategory = (categoryId: string) => products.filter(p => p.category === categoryId);
export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getRecommendedProductsByIds = (ids: string[]) => products.filter(p => ids.includes(p.id));
