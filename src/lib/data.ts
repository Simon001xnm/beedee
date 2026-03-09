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
    id: 'samba-single-sole',
    name: 'Samba single sole',
    price: 2499,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 5.38.03 PM (1).jpeg', hint: 'samba single sole' },
      { url: '/WhatsApp Image 2026-02-06 at 5.38.03 PM (2).jpeg', hint: 'samba single sole side' },
      { url: '/WhatsApp Image 2026-02-06 at 5.38.03 PM.jpeg', hint: 'samba single sole detail' },
      { url: '/WhatsApp Image 2026-02-06 at 5.38.04 PM.jpeg', hint: 'samba single sole back' }
    ],
    description: 'The Samba single sole brings a sleek, low-profile look to the classic indoor soccer silhouette. Featuring a clean design and premium materials, it\'s a versatile choice for any casual outfit in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['floral-samba', 'samoa-classic', 'nb-classic-sneakers'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Classic White/Black']
  },
  {
    id: 'floral-samba',
    name: 'Floral Samba',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 5.37.25 PM.jpeg', hint: 'floral samba' },
      { url: '/WhatsApp Image 2026-02-06 at 5.37.25 PM (2).jpeg', hint: 'floral samba side' },
      { url: '/WhatsApp Image 2026-02-06 at 5.37.25 PM (1).jpeg', hint: 'floral samba detail' }
    ],
    description: 'A beautiful floral take on the classic Samba silhouette. Combining iconic street style with a fresh, artistic print, these sneakers are perfect for making a statement in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['samoa-classic', 'nb-classic-sneakers', 'nike-zoom'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Floral Multi']
  },
  {
    id: 'nike-vomero',
    name: 'Nike Vomero',
    price: 3799,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 5.36.55 PM.jpeg', hint: 'nike vomero' },
      { url: '/WhatsApp Image 2026-02-06 at 5.36.55 PM (1).jpeg', hint: 'nike vomero profile' }
    ],
    description: 'The Nike Vomero offers superior cushioning and a smooth ride, making it a favorite for long runs and daily comfort. Its breathable mesh and supportive design ensure a premium experience.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom', 'nb-9060', 'asics-performance-runner'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Multi-color']
  },
  {
    id: 'sb-dunks',
    name: 'SB Dunks',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 3.52.33 PM (2).jpeg', hint: 'sb dunks profile' },
      { url: '/WhatsApp Image 2026-02-06 at 3.52.33 PM (3).jpeg', hint: 'sb dunks side' }
    ],
    description: 'The SB Dunk is a legendary skate shoe that has become a staple in streetwear. Known for its comfort, durability, and unique colorways, it\'s perfect for the streets of Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-3', 'jordan-voodoo', 'nike-zoom', 'nb-9060'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'jordan-3',
    name: 'Jordan 3',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 3.50.30 PM.jpeg', hint: 'jordan 3 sneakers' },
      { url: '/WhatsApp Image 2026-02-06 at 3.50.30 PM (2).jpeg', hint: 'jordan 3 side' },
      { url: '/WhatsApp Image 2026-02-06 at 3.50.30 PM (1).jpeg', hint: 'jordan 3 detail' },
      { url: '/WhatsApp Image 2026-02-06 at 3.50.29 PM.jpeg', hint: 'jordan 3 front' },
      { url: '/WhatsApp Image 2026-02-06 at 3.50.29 PM (2).jpeg', hint: 'jordan 3 back' },
      { url: '/WhatsApp Image 2026-02-06 at 3.50.29 PM (1).jpeg', hint: 'jordan 3 lifestyle' }
    ],
    description: 'The Jordan 3 is a legendary silhouette featuring the iconic elephant print and visible Air cushioning. A cornerstone of sneaker culture, perfect for making a statement on the streets of Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-voodoo', 'nike-zoom', 'bape-star', 'nb-9060'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Multi']
  },
  {
    id: 'nb-classic-sneakers',
    name: 'New Balance Classic',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 3.47.22 PM (1).jpeg', hint: 'new balance sneakers' },
      { url: '/WhatsApp Image 2026-02-06 at 3.47.22 PM.jpeg', hint: 'new balance sneakers side' },
      { url: '/WhatsApp Image 2026-02-06 at 3.47.23 PM (1).jpeg', hint: 'new balance sneakers detail' },
      { url: '/WhatsApp Image 2026-02-06 at 3.47.23 PM (2).jpeg', hint: 'new balance sneakers back' }
    ],
    description: 'The New Balance classic collection offers timeless style and exceptional comfort. Built with premium materials and a supportive sole, these sneakers are perfect for everyday wear in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nb-9060', 'nb-9060-alt', 'nike-zoom', 'asics-performance-runner'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'soccer-boots',
    name: 'Elite Soccer Boots',
    price: 3999,
    images: [
      { url: '/WhatsApp Image 2026-02-03 at 10.00.24 AM (2).jpeg', hint: 'soccer boots side' },
      { url: '/WhatsApp Image 2026-02-03 at 10.00.24 AM.jpeg', hint: 'soccer boots detail' }
    ],
    description: 'Engineered for elite performance on the pitch. These soccer boots provide exceptional traction, ball control, and comfort for the competitive player in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-performance-runner', 'nike-zoom', 'nb-9060'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Professional Multi']
  },
  {
    id: 'mens-casual-loafers',
    name: 'Men\'s Casual Loafers',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-03 at 10.04.28 AM.jpeg', hint: 'mens casual loafers' },
      { url: '/WhatsApp Image 2026-02-03 at 10.04.28 AM (1).jpeg', hint: 'mens casual loafers side' }
    ],
    description: 'Sophisticated and versatile casual loafers for the modern man. Handcrafted with premium materials for a comfortable fit that transitions effortlessly from office to evening.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-handcrafted-sandals', 'mens-comfort-sandals', 'samoa-classic'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'mens-comfort-sandals',
    name: 'Men\'s Comfort Sandals',
    price: 1800,
    images: [
      { url: '/WhatsApp Image 2026-02-03 at 12.03.18 PM (1).jpeg', hint: 'mens comfort sandals' },
      { url: '/WhatsApp Image 2026-02-03 at 12.03.18 PM (2).jpeg', hint: 'mens comfort sandals side' },
      { url: '/WhatsApp Image 2026-02-03 at 12.03.18 PM.jpeg', hint: 'mens comfort sandals detail' }
    ],
    description: 'Lightweight and durable comfort sandals for men. Designed with a supportive footbed and breathable straps, perfect for casual outings and daily wear in warm weather.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-handcrafted-sandals', 'samoa-classic', 'nb-9060'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'asics-performance-runner',
    name: 'ASICS Performance Runner',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 11.55.00 AM (1).jpeg', hint: 'asics performance runner' },
      { url: '/WhatsApp Image 2026-02-04 at 11.55.00 AM.jpeg', hint: 'asics performance runner view' },
      { url: '/WhatsApp Image 2026-02-04 at 11.55.01 AM (1).jpeg', hint: 'asics performance runner detail' }
    ],
    description: 'Engineered for the ultimate running experience, the ASICS Performance Runner provides superior shock absorption and a responsive ride. Perfect for both serious training and premium street style.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-gel-sneakers', 'nike-zoom', 'nb-9060'],
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Multi-color']
  },
  {
    id: 'mens-handcrafted-sandals',
    name: 'Men\'s Handcrafted Sandals',
    price: 1999,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 11.55.52 AM.jpeg', hint: 'mens handcrafted sandals' },
      { url: '/WhatsApp Image 2026-02-04 at 11.55.53 AM (1).jpeg', hint: 'mens handcrafted sandals view' },
      { url: '/WhatsApp Image 2026-02-04 at 11.55.53 AM (2).jpeg', hint: 'mens handcrafted sandals detail' }
    ],
    description: 'Premium handcrafted men\'s sandals designed for ultimate comfort and durability. Perfect for casual wear and everyday style in Nairobi.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['samoa-classic', 'nb-9060', 'asics-gel-sneakers'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Tan/Brown']
  },
  {
    id: 'nb-9060-alt',
    name: 'New Balance 9060',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 12.20.56 PM.jpeg', hint: 'new balance 9060 variant' }
    ],
    description: 'A modern expression of the refined style and innovation-led design that has made the 99X series home to some of the most iconic models in New Balance history.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nb-9060', 'nike-ld-waffle', 'nike-zoom'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Multi-color']
  },
  {
    id: 'nb-9060',
    name: 'New Balance 9060',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 12.22.51 PM (1).jpeg', hint: 'new balance 9060' },
      { url: '/WhatsApp Image 2026-02-04 at 12.22.51 PM.jpeg', hint: 'new balance 9060 view' }
    ],
    description: 'The New Balance 9060 is a new expression of the refined style and innovation-led design that has made the 99X series home to some of the most iconic models in New Balance history.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-ld-waffle', 'nike-zoom', 'asics-gel-sneakers'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-ld-waffle',
    name: 'Nike LD waffle',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 12.23.35 PM.jpeg', hint: 'nike ld waffle' }
    ],
    description: 'The Nike LD Waffle is a fusion of two iconic silhouettes, offering a unique layered look and exceptional comfort. A premium choice for any sneaker collection.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom', 'bape-star', 'jordan-voodoo'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-zoom',
    name: 'Nike zoom',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 1.55.05 PM (1).jpeg', hint: 'nike zoom sneakers' },
      { url: '/WhatsApp Image 2026-02-04 at 1.55.05 PM (2).jpeg', hint: 'nike zoom side' },
      { url: '/WhatsApp Image 2026-02-04 at 1.55.06 PM.jpeg', hint: 'nike zoom detail' }
    ],
    description: 'Experience responsive cushioning and an iconic design with the Nike Zoom. Perfect for performance and street style.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['bape-star', 'jordan-voodoo', 'asics-gel-sneakers', 'nike-ld-waffle'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'bape-star',
    name: 'Bape star',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.04.36 PM.jpeg', hint: 'bape star sneakers' },
      { url: '/WhatsApp Image 2026-02-05 at 3.04.37 PM.jpeg', hint: 'bape star side' },
      { url: '/WhatsApp Image 2026-02-05 at 3.04.38 PM.jpeg', hint: 'bape star detail' }
    ],
    description: 'The Bape Star collection brings bold, iconic streetwear design to your rotation. Featuring distinctive patterns and premium materials, these sneakers are a must-have for the modern collector.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-voodoo', 'asics-gel-sneakers', 'samoa-classic', 'nike-zoom'],
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Multi-color']
  },
  {
    id: 'jordan-voodoo',
    name: 'Jordan Voodoo',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.15.11 PM.jpeg', hint: 'jordan voodoo' },
      { url: '/WhatsApp Image 2026-02-05 at 3.15.11 PM (1).jpeg', hint: 'jordan voodoo profile' }
    ],
    description: 'The Jordan Voodoo edition brings a unique, mystical aesthetic to the classic silhouette. Featuring earthy tones and intricate details, it\'s a standout piece for any sneaker enthusiast.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-gel-sneakers', 'samoa-classic', 'bape-star', 'nike-zoom', 'nike-ld-waffle'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Earthy Multi']
  },
  {
    id: 'asics-gel-sneakers',
    name: 'ASICS GEL Sneakers',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.21.19 PM.jpeg', hint: 'asics gel sneakers' },
      { url: '/WhatsApp Image 2026-02-05 at 3.21.20 PM.jpeg', hint: 'asics gel sneakers detail' }
    ],
    description: 'High-performance ASICS GEL sneakers designed for ultimate comfort and support. Perfect for both athletic activities and stylish everyday wear in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['samoa-classic', 'jordan-voodoo', 'bape-star', 'nike-zoom'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-active-sneakers',
    name: 'Kids Active Sneakers',
    price: 1799,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.23.05 PM.jpeg', hint: 'kids active sneakers' },
      { url: '/WhatsApp Image 2026-02-05 at 3.23.06 PM (1).jpeg', hint: 'kids active sneakers blue' },
      { url: '/WhatsApp Image 2026-02-05 at 3.23.06 PM (2).jpeg', hint: 'kids active sneakers detail' },
      { url: '/WhatsApp Image 2026-02-05 at 3.23.07 PM (2).jpeg', hint: 'kids active sneakers profile' },
      { url: '/WhatsApp Image 2026-02-05 at 3.23.07 PM.jpeg', hint: 'kids active sneakers side' }
    ],
    description: 'Modern active sneakers for juniors. Built for performance and style, these sneakers provide excellent support for all-day activities.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: ['kids-sneakers', 'kids-open'],
    sizes: ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'],
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
    relatedProducts: ['kids-open', 'kids-active-sneakers'],
    sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    colors: ['Multi-color']
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
    relatedProducts: ['kids-sneakers', 'kids-active-sneakers'],
    sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
    colors: ['Multi-color']
  },
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
    relatedProducts: ['nike-zoom', 'bape-star', 'jordan-voodoo', 'asics-gel-sneakers'],
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
