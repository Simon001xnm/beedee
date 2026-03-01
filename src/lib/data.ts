
import type { Product, Category } from './types';

// IDs of products that should be exclusive to the Hero section
const HERO_ONLY_IDS = ['p0', 'p6', 'p9'];

export const categories: Category[] = [
  { id: 'sneaker-lab', name: 'The Sneaker Lab', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800', imageHint: 'sneakers' },
  { id: 'gentlemens-quarters', name: 'Gentlemens Quarters', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800', imageHint: 'mens shoes' },
  { id: 'ladies-vault', name: 'The Ladies Vault', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800', imageHint: 'ladies shoes' },
  { id: 'mini-icons', name: 'Mini Icons', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800', imageHint: 'kids shoes' },
];

export const products: Product[] = [
  { id: 'p0', name: 'New Balance Special Offer', price: 2999, images: [{ url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000', hint: 'sneaker' }], description: 'Limited time offer on New Balance sneakers featuring premium cushioning and classic style.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p9', 'p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p1', name: 'Samoa Classic', price: 2799, images: [{ url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000', hint: 'classic shoe' }], description: 'The timeless Samoa sneakers, rebuilt for modern comfort and everyday urban wear.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p0'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p2', name: 'Kids Open Comfort', price: 1499, images: [{ url: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=1000', hint: 'kids sandal' }], description: 'Breathable and secure open shoes designed for active kids.', category: 'mini-icons', subcategory: null, relatedProducts: ['p3', 'p4'], sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'], colors: ['Multi'] },
  { id: 'p3', name: 'Kids Sneakers (Toddler)', price: 1799, images: [{ url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000', hint: 'baby sneaker' }], description: 'Stylish and supportive sneakers perfect for little feet on the move.', category: 'mini-icons', subcategory: null, relatedProducts: ['p2', 'p4'], sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], colors: ['Multi'] },
  { id: 'p5', name: 'ASICS GEL Performance', price: 2999, images: [{ url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000', hint: 'running shoe' }], description: 'High-performance ASICS GEL sneakers offering superior shock absorption.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p6', name: 'Jordan Voodoo Edition', price: 3499, images: [{ url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000', hint: 'jordan sneaker' }], description: 'The exclusive Jordan Voodoo, featuring hand-crafted details and premium materials.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p8'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p9', name: 'New Balance 9060 (Hero)', price: 3499, images: [{ url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000', hint: 'modern sneaker' }], description: 'Futuristic New Balance 9060, pushing the boundaries of traditional sneaker design.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p0', 'p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p11', name: 'Handcrafted Men Sandals', price: 1800, images: [{ url: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1000', hint: 'mens sandals' }], description: 'Premium leather sandals designed for absolute comfort and casual elegance.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p15', 'p23'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p13', name: 'Clarks Elegant Formals', price: 2999, images: [{ url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000', hint: 'formal shoe' }], description: 'Timeless Clarks formal shoes, perfect for the office or special occasions.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p15', 'p23'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { 
    id: 'p15', 
    name: 'Polo Loafer Elite', 
    price: 2499, 
    images: [{ url: 'https://images.unsplash.com/photo-1621306337625-3e4d7c544f1f?q=80&w=1000', hint: 'mens loafer' }], 
    description: 'Premium Polo loafers that define the modern gentleman. Sophisticated and comfortable.', 
    category: 'gentlemens-quarters', 
    subcategory: null, 
    relatedProducts: ['p13', 'p11', 'p23'], 
    sizes: ['40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p16', 
    name: "Nike Shox TL Men's Shoes", 
    price: 3999, 
    images: [
      { url: '/brands/1759343541238.jpg', hint: 'nike shox' },
      { url: '/brands/1759343541032.jpg', hint: 'nike shox side' }
    ], 
    description: "The Nike Shox TL takes mechanical cushioning to the next level. Reconstructed version of the 2003 icon.", 
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
    description: "The most moving and affordable classic in the streets. A true essential.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p1', 'p0'], 
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p18', 
    name: "Air Force 1 Kids", 
    price: 1799, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.44.jpeg', hint: 'air force 1' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.44(1).jpeg', hint: 'air force 1 side' }
    ], 
    description: "Iconic Air Force 1 for the next generation. Durable and stylish.", 
    category: 'mini-icons', 
    subcategory: null, 
    relatedProducts: ['p2', 'p3'], 
    sizes: ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35'], 
    colors: ['Black', 'White'] 
  },
  { 
    id: 'p19', 
    name: "Samba Single sole", 
    price: 2499, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.45.jpeg', hint: 'samba top' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.45(1).jpeg', hint: 'samba side' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.46.jpeg', hint: 'samba front' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.46(1).jpeg', hint: 'samba angle' }
    ], 
    description: "Sleek, classic profile with a focus on minimalist design.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p16', 'p17'], 
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p20', 
    name: "New Balance 530", 
    price: 2499, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.49(2).jpeg', hint: 'nb 530' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.50.jpeg', hint: 'nb 530 side' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.50(1).jpeg', hint: 'nb 530 detail' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.57(1).jpeg', hint: 'nb 530 angle' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.58.jpeg', hint: 'nb 530 back' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.58(1).jpeg', hint: 'nb 530 front' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.58(2).jpeg', hint: 'nb 530 close' }
    ], 
    description: "Classic running shoe silhouette with modern comfort tech.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p19', 'p0'], 
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p21', 
    name: "New Balance 9060", 
    price: 3999, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.42.59(1).jpeg', hint: 'nb 9060' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.43.00.jpeg', hint: 'nb 9060 side' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.43.00(1).jpeg', hint: 'nb 9060 angle' },
      { url: '/brands/WhatsApp Image 2026-01-09 at 17.43.01.jpeg', hint: 'nb 9060 detail' }
    ], 
    description: "Refined style and innovation-led design from the iconic 99X series.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p20', 'p9'], 
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p22', 
    name: "Adidas Samoa", 
    price: 2999, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.57.56.jpeg', hint: 'adidas samoa' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.57.57 (1).jpeg', hint: 'adidas samoa side' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.57.57 (3).jpeg', hint: 'adidas samoa back' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.57.57 (4).jpeg', hint: 'adidas samoa detail' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.57.57.jpeg', hint: 'adidas samoa angle' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.57.58.jpeg', hint: 'adidas samoa front' }
    ], 
    description: "The timeless Adidas Samoa sneakers, rebuilt for modern comfort and everyday urban wear.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p1', 'p19'], 
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p23', 
    name: "Timberland Casuals Laced", 
    price: 2800, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.59.22 (1).jpeg', hint: 'timberland casual' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.59.22.jpeg', hint: 'timberland casual side' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.59.23 (1).jpeg', hint: 'timberland casual angle' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.59.23.jpeg', hint: 'timberland casual detail' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 10.59.24.jpeg', hint: 'timberland casual back' }
    ], 
    description: "Premium Timberland casual laced shoes, built for rugged style and all-day comfort.", 
    category: 'gentlemens-quarters', 
    subcategory: null, 
    relatedProducts: ['p11', 'p13', 'p15'], 
    sizes: ['40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
  },
  { 
    id: 'p24', 
    name: "Official Formal Shoes", 
    price: 2499, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.09 (2).jpeg', hint: 'official shoe' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.09.jpeg', hint: 'official shoe side' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.10 (2).jpeg', hint: 'official shoe angle' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.11 (2).jpeg', hint: 'official shoe back' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.11 (3).jpeg', hint: 'official shoe detail' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.11 (4).jpeg', hint: 'official shoe sole' },
      { url: '/brands/WhatsApp Image 2026-01-28 at 11.00.11.jpeg', hint: 'official shoe top' }
    ], 
    description: "Premium official formal shoes, available in black and brown. Perfect for professional and formal occasions.", 
    category: 'gentlemens-quarters', 
    subcategory: null, 
    relatedProducts: ['p13', 'p15', 'p23'], 
    sizes: ['40', '41', '42', '43', '44', '45'], 
    colors: ['Black', 'Brown'] 
  },
  { 
    id: 'p25', 
    name: "Air Max 90", 
    price: 3799, 
    images: [
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.54 (1).jpeg', hint: 'air max 90 side' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.54 (2).jpeg', hint: 'air max 90 angle' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.54.jpeg', hint: 'air max 90 top' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.55 (1).jpeg', hint: 'air max 90 heel' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.55 (2).jpeg', hint: 'air max 90 back' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.55.jpeg', hint: 'air max 90 lateral' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.56.jpeg', hint: 'air max 90 sole' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.58.jpeg', hint: 'air max 90 close' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.59 (1).jpeg', hint: 'air max 90 pair' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.59 (2).jpeg', hint: 'air max 90 profile' },
      { url: '/brands/WhatsApp Image 2026-01-29 at 11.11.59.jpeg', hint: 'air max 90 front' }
    ], 
    description: "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.", 
    category: 'sneaker-lab', 
    subcategory: null, 
    relatedProducts: ['p16', 'p21'], 
    sizes: ['40', '41', '42', '43', '44', '45'], 
    colors: ['Multi'] 
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
