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
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic White']
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
