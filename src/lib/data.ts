
import type { Product, Category } from './types';

// IDs of products that should be exclusive to the Hero section
const HERO_ONLY_IDS = ['p0', 'p6', 'p9'];

export const categories: Category[] = [
  { id: 'sneaker-lab', name: 'The Sneaker Lab', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800', imageHint: 'sneakers' },
  { id: 'gentlemens-quarters', name: 'Gentlemen\'s Quarters', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800', imageHint: 'mens shoes' },
  { id: 'ladies-vault', name: 'The Ladies\' Vault', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800', imageHint: 'ladies shoes' },
  { id: 'mini-icons', name: 'Mini Icons', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800', imageHint: 'kids shoes' },
];

export const products: Product[] = [
  { id: 'p0', name: 'New Balance Special Offer', price: 2999, images: [{ url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000', hint: 'sneaker' }], description: 'Limited time offer on New Balance sneakers featuring premium cushioning and classic style.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p9', 'p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p1', name: 'Samoa Classic', price: 2799, images: [{ url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000', hint: 'classic shoe' }], description: 'The timeless Samoa sneakers, rebuilt for modern comfort and everyday urban wear.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p0'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p2', name: 'Kids Open Comfort', price: 1499, images: [{ url: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=1000', hint: 'kids sandal' }], description: 'Breathable and secure open shoes designed for active kids.', category: 'mini-icons', subcategory: null, relatedProducts: ['p3', 'p4'], sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'], colors: ['Multi'] },
  { id: 'p3', name: 'Kids Sneakers (Toddler)', price: 1799, images: [{ url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000', hint: 'baby sneaker' }], description: 'Stylish and supportive sneakers perfect for little feet on the move.', category: 'mini-icons', subcategory: null, relatedProducts: ['p2', 'p4'], sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], colors: ['Multi'] },
  { id: 'p5', name: 'ASICS GEL Performance', price: 2999, images: [{ url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000', hint: 'running shoe' }], description: 'High-performance ASICS GEL sneakers offering superior shock absorption.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p6', name: 'Jordan Voodoo Edition', price: 3499, images: [{ url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000', hint: 'jordan sneaker' }], description: 'The exclusive Jordan Voodoo, featuring hand-crafted details and premium materials.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p8'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p9', name: 'New Balance 9060', price: 3499, images: [{ url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000', hint: 'modern sneaker' }], description: 'Futuristic New Balance 9060, pushing the boundaries of traditional sneaker design.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p0', 'p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p11', name: 'Handcrafted Men Sandals', price: 1800, images: [{ url: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1000', hint: 'mens sandals' }], description: 'Premium leather sandals designed for absolute comfort and casual elegance.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p15'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p13', name: 'Clarks Elegant Formals', price: 2999, images: [{ url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000', hint: 'formal shoe' }], description: 'Timeless Clarks formal shoes, perfect for the office or special occasions.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p15'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p15', name: 'Polo Loafer Elite', price: 2499, images: [{ url: 'https://images.unsplash.com/photo-1621306337625-3e4d7c544f1f?q=80&w=1000', hint: 'mens loafer' }], description: 'Sophisticated Polo loafers that define the modern gentleman.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p13', 'p11'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { 
    id: 'p16', 
    name: "Nike Shox TL Men's Shoes", 
    price: 3999, 
    images: [
      { url: '/brands/1759343541238.jpg', hint: 'nike shox' },
      { url: '/brands/1759343541032.jpg', hint: 'nike shox side' }
    ], 
    description: "The Nike Shox TL takes mechanical cushioning to the next level. A reconstructed version of the 2003 icon, it features breathable mesh in the upper and full-length Nike Shox technology for optimal impact absorption. Available in black and white.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p6', 'p8'], 
    sizes: ['40', '41', '42', '43', '44', '45'], 
    colors: ['Black', 'White'] 
  },
  { 
    id: 'p17', 
    name: "Converse Classic Low", 
    price: 999, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.41.jpeg', hint: 'converse low top' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.43.jpeg', hint: 'converse side view' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.43(1).jpeg', hint: 'converse detail' }
    ], 
    description: "The most moving and affordable classic in the streets. Lightweight, versatile, and available in multiple colors. A true essential for every Kenyan wardrobe.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p1', 'p0'], 
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], 
    colors: ['Multi', 'Black', 'White', 'Blue', 'Red'] 
  },
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
