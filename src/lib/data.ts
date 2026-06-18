import type { Product, Category } from './types';

// IDs of products that should be exclusive to the Hero section
const HERO_ONLY_IDS: string[] = [];

// IDs of products that are for the landing page grid only (image-based offers)
const LANDING_OFFER_IDS: string[] = [
  'offer-landing-20',
  'offer-landing-19',
  'offer-landing-18',
  'offer-landing-17',
  'offer-landing-16',
  'offer-landing-15',
  'offer-landing-14',
  'offer-landing-13',
  'offer-landing-12',
  'offer-landing-11',
  'offer-landing-10',
  'offer-landing-9', 
  'offer-landing-8',
  'offer-landing-7',
  'offer-landing-6',
  'offer-landing-5',
  'offer-landing-4',
  'offer-landing-3',
  'offer-landing-2',
  'offer-landing-1'
];

export const categories: Category[] = [
  { id: 'sneaker-lab', name: 'The Sneaker Lab', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800', imageHint: 'sneakers' },
  { id: 'gentlemens-quarters', name: 'Gentlemens Quarters', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800', imageHint: 'mens shoes' },
  { id: 'ladies-vault', name: 'The Ladies Vault', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800', imageHint: 'ladies shoes' },
  { id: 'mini-icons', name: 'Mini Icons', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800', imageHint: 'kids shoes' },
];

/**
 * All products in the marketplace. 
 * Latest products are added to the TOP of the array.
 */
export const products: Product[] = [
  {
    id: 'offer-landing-20',
    name: 'Boutique Collection Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.22.05.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-19',
    name: 'Elite Series Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.22.04.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-18',
    name: 'Heritage Choice Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.22.04 (1).jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-17',
    name: 'Premium Edition Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.59 (1).jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-16',
    name: 'Signature Collection Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.58.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-15',
    name: 'Luxe Selection Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.57.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-14',
    name: 'Elite Arrival Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.56.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-13',
    name: 'Boutique Series Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.56 (1).jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-12',
    name: 'Heritage Edition Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.55.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-11',
    name: 'Premium Arrival Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.55 (1).jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-10',
    name: 'Signature Choice Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.54.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-9',
    name: 'Heritage Collection Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.53.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-8',
    name: 'Elite Edition Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.53 (1).jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-7',
    name: 'Signature Series Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.52.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-6',
    name: 'Boutique Choice Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.51.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-5',
    name: 'Luxe Arrival Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.51 (1).jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-4',
    name: 'Premium Selection Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.49.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-3',
    name: 'Exclusive Collection Item',
    price: 0,
    images: [{ url: '/WhatsApp Image 2026-06-17 at 22.21.43.jpeg', hint: 'sneaker offer' }],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-2',
    name: 'New Collection Offer',
    price: 0,
    images: [
      { url: '/WhatsApp Image 2026-06-17 at 22.21.42 (1).jpeg', hint: 'premium sneakers offer' }
    ],
    description: 'Exclusive arrival. See image for detailed pricing and model specs.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'offer-landing-1',
    name: 'Premium Offer',
    price: 0, 
    images: [
      { url: '/WhatsApp Image 2026-06-17 at 22.21.40.jpeg', hint: 'premium offer' }
    ],
    description: 'New arrivals collection. Please see image for specific model names and pricing details.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: [],
    colors: []
  },
  {
    id: 'timberland-premium-luxe',
    name: 'Timberland Premium Luxe',
    price: 4499,
    images: [
      { url: '/WhatsApp Image 2026-04-23 at 15.52.42.jpeg', hint: 'timberland premium luxe' },
      { url: '/WhatsApp Image 2026-04-23 at 15.52.43.jpeg', hint: 'timberland premium luxe side' }
    ],
    description: 'The pinnacle of rugged luxury. This Timberland Premium Luxe edition combines the brand\'s legendary durability with an elevated aesthetic for the modern Nairobi gentleman.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland-v3', 'timberland-premium', 'billionaire-boots'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Wheat']
  },
  {
    id: 'asics-elite',
    name: 'Asics Elite',
    price: 3799,
    images: [
      { url: '/WhatsApp Image 2026-03-31 at 3.32.50 PM.jpeg', hint: 'asics elite' },
      { url: '/WhatsApp Image 2026-03-31 at 3.32.51 PM (1).jpeg', hint: 'asics elite view' },
      { url: '/WhatsApp Image 2026-03-31 at 3.32.51 PM.jpeg', hint: 'asics elite side' },
      { url: '/WhatsApp Image 2026-04-17 at 4.43.01 PM (1).jpeg', hint: 'asics elite detail' },
      { url: '/WhatsApp Image 2026-04-17 at 4.43.01 PM.jpeg', hint: 'asics elite back' },
      { url: '/WhatsApp Image 2026-04-17 at 11.35.01 AM.jpeg', hint: 'asics elite top' },
      { url: '/WhatsApp Image 2026-04-17 at 12.02.51 PM (1).jpeg', hint: 'asics elite profile' },
      { url: '/WhatsApp Image 2026-04-17 at 12.02.51 PM (2).jpeg', hint: 'asics elite sole' },
      { url: '/WhatsApp Image 2026-04-17 at 12.02.51 PM.jpeg', hint: 'asics elite angle' }
    ],
    description: 'The Asics Elite represents the pinnacle of performance and style. Engineered for maximum comfort and durability, these sneakers are perfect for the active urbanite in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-performance-runner', 'nike-zoom', 'nb-9060'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Performance Multi']
  },
  {
    id: 'jordan-13',
    name: 'Jordan 13',
    price: 3799,
    images: [
      { url: '/Image 2026-03-25 at 3.08.59 PM.jpeg', hint: 'jordan 13' }
    ],
    description: 'The Jordan 13 is a legendary basketball silhouette known for its unique design and exceptional performance. A must-have for any sneakerhead in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-3', 'jordan-voodoo', 'sb-dunks'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Multi']
  },
  {
    id: 'hermes-sandals',
    name: 'Hermes sandals',
    price: 1999,
    images: [
      { url: '/WhatsApp Image 2026-02-13 at 1.18.02 PM.jpeg', hint: 'hermes sandals' }
    ],
    description: 'Timeless elegance meets modern comfort. These Hermes sandals are handcrafted for the sophisticated individual, perfect for warm Nairobi days.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-casual-loafers', 'mens-comfort-sandals', 'mens-handcrafted-sandals'],
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Multi-color']
  }
];

export const getProducts = () => {
  return [...products].filter(p => !HERO_ONLY_IDS.includes(p.id));
}

export const getLandingExclusiveProducts = () => {
  return products.filter(p => LANDING_OFFER_IDS.includes(p.id));
}

export const getHeroProducts = () => {
  // Return products that are NOT landing exclusives for the hero carousel
  return products.filter(p => !LANDING_OFFER_IDS.includes(p.id)).slice(0, 10);
}

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (categoryId: string) => {
    return [...products].filter(p => (p.category === categoryId || p.subcategory === categoryId) && !HERO_ONLY_IDS.includes(p.id));
}

export const getCategoryById = (id: string) => categories.find(c => c.id === id);

export const getFeaturedProducts = (limit: number = 4) => {
  return [...products].filter(p => !HERO_ONLY_IDS.includes(p.id)).slice(0, limit);
}

export const getRelatedProducts = (product: Product) => {
    return products.filter(p => product.relatedProducts.includes(p.id) && p.id !== product.id);
}

export const getRecommendedProductsByIds = (ids: string[]) => {
  return products.filter(p => ids.includes(p.id));
}
