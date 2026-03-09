import type { Product, Category } from './types';

// IDs of products that should be exclusive to the Hero section
const HERO_ONLY_IDS: string[] = [];

export const categories: Category[] = [
  { id: 'sneaker-lab', name: 'The Sneaker Lab', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800', imageHint: 'sneakers' },
  { id: 'gentlemens-quarters', name: 'Gentlemens Quarters', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800', imageHint: 'mens shoes' },
  { id: 'ladies-vault', name: 'The Ladies Vault', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800', imageHint: 'ladies shoes' },
  { id: 'mini-icons', name: 'Mini Icons', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800', imageHint: 'kids shoes' },
];

/**
 * All products in the marketplace. 
 * Add your new products here!
 */
export const products: Product[] = [
  {
    id: 'samoa-classic',
    name: 'Samoa Classic',
    price: 2799,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 10.59.37 AM (1).jpeg', hint: 'samoa sneakers' }
    ],
    description: 'A timeless silhouette that combines heritage style with modern comfort. This classic design is built for durability and style, perfect for the streets of Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['kids-sneakers'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic White']
  },
  {
    id: 'kids-open',
    name: 'Kids Open Comfort',
    price: 1499,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 10.02.21 AM.jpeg', hint: 'kids sandals' },
      { url: '/WhatsApp Image 2026-02-06 at 10.02.21 AM (1).jpeg', hint: 'kids sandals view' },
      { url: '/WhatsApp Image 2026-02-06 at 10.02.21 AM (2).jpeg', hint: 'kids sandals view' },
      { url: '/WhatsApp Image 2026-02-06 at 10.02.21 AM (3).jpeg', hint: 'kids sandals view' },
      { url: '/WhatsApp Image 2026-02-06 at 10.02.22 AM (1).jpeg', hint: 'kids sandals view' }
    ],
    description: 'Ultra-comfortable open-toe sandals for children. Designed for all-day play with a secure fit and breathable materials, perfect for active kids.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: ['kids-sneakers'],
    sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-sneakers',
    name: 'Kids Urban Sneakers',
    price: 1799,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 10.01.19 AM.jpeg', hint: 'kids sneakers' },
      { url: '/WhatsApp Image 2026-02-06 at 10.01.19 AM (1).jpeg', hint: 'kids sneakers blue' },
      { url: '/WhatsApp Image 2026-02-06 at 10.01.19 AM (2).jpeg', hint: 'kids sneakers detail' },
      { url: '/WhatsApp Image 2026-02-06 at 10.01.20 AM.jpeg', hint: 'kids sneakers profile' },
      { url: '/WhatsApp Image 2026-02-06 at 10.01.22 AM (1).jpeg', hint: 'kids sneakers sole' },
      { url: '/WhatsApp Image 2026-02-06 at 10.01.23 AM.jpeg', hint: 'kids sneakers back' }
    ],
    description: 'Stylish and durable urban sneakers for kids. Designed for comfort and long-lasting wear, perfect for school or weekend adventures.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: ['kids-open'],
    sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    colors: ['Multi-color']
  }
];

export const getProducts = () => products.filter(p => !HERO_ONLY_IDS.includes(p.id));

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => (p.category === categoryId || p.subcategory === categoryId) && !HERO_ONLY_IDS.includes(p.id));
}

export const getCategoryById = (id: string) => categories.find(c => c.id === id);

export const getFeaturedProducts = (limit: number = 4) => products.filter(p => !HERO_ONLY_IDS.includes(p.id)).slice(0, limit);

export const getRelatedProducts = (product: Product) => {
    return products.filter(p => product.relatedProducts.includes(p.id) && p.id !== product.id);
}

export const getRecommendedProductsByIds = (ids: string[]) => {
  return products.filter(p => ids.includes(p.id));
}
