import type { Product, Category } from './types';

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
    relatedProducts: ['asics-elite'],
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
    relatedProducts: [],
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
    relatedProducts: ['nike-vomero'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Performance Multi']
  },
  {
    id: 'samba-single-sole',
    name: 'Samba Single Sole',
    price: 2499,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 5.38.03 PM (1).jpeg', hint: 'samba single sole' }],
    description: 'Sleek, low-profile indoor soccer silhouette with clean design.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Classic White/Black']
  },
  {
    id: 'floral-samba',
    name: 'Floral Samba',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 5.37.25 PM.jpeg', hint: 'floral samba' }],
    description: 'Artistic floral take on the classic Samba silhouette.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Floral Multi']
  },
  {
    id: 'sb-dunks',
    name: 'SB Dunks',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 3.52.33 PM (2).jpeg', hint: 'sb dunks' }],
    description: 'Legendary skate shoe turned streetwear staple.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nb-classic',
    name: 'New Balance Classic',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 3.47.22 PM (1).jpeg', hint: 'new balance' }],
    description: 'Timeless style meets exceptional everyday comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'soccer-boots-elite',
    name: 'Elite Soccer Boots',
    price: 3999,
    images: [{ url: '/WhatsApp Image 2026-02-03 at 10.00.24 AM (2).jpeg', hint: 'soccer boots' }],
    description: 'Engineered for elite performance and ball control.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Professional Multi']
  },
  {
    id: 'mens-casual-loafers',
    name: 'Men\'s Casual Loafers',
    price: 3499,
    images: [{ url: '/WhatsApp Image 2026-02-03 at 10.04.28 AM.jpeg', hint: 'loafers' }],
    description: 'Versatile casual loafers for the modern gentleman.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'mens-comfort-sandals',
    name: 'Men\'s Comfort Sandals',
    price: 1800,
    images: [{ url: '/WhatsApp Image 2026-02-03 at 12.03.18 PM (1).jpeg', hint: 'sandals' }],
    description: 'Supportive footbed and breathable design for warm weather.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'mens-handcrafted-sandals',
    name: 'Men\'s Handcrafted Sandals',
    price: 1999,
    images: [{ url: '/WhatsApp Image 2026-02-04 at 11.55.52 AM.jpeg', hint: 'handcrafted sandals' }],
    description: 'Premium handcrafted leather for ultimate durability.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Tan/Brown']
  },
  {
    id: 'nb-9060',
    name: 'New Balance 9060',
    price: 3499,
    images: [{ url: '/WhatsApp Image 2026-02-04 at 12.22.51 PM (1).jpeg', hint: 'nb 9060' }],
    description: 'Modern expression of refined style and innovation.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-ld-waffle',
    name: 'Nike LD Waffle',
    price: 3499,
    images: [{ url: '/WhatsApp Image 2026-02-04 at 12.23.35 PM.jpeg', hint: 'ld waffle' }],
    description: 'Unique layered look fusion of two iconic silhouettes.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-zoom',
    name: 'Nike Zoom',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-04 at 1.55.05 PM (1).jpeg', hint: 'nike zoom' }],
    description: 'Responsive cushioning and iconic athletic design.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'bape-star',
    name: 'Bape Star',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-05 at 3.04.36 PM.jpeg', hint: 'bape star' }],
    description: 'Bold streetwear icons with distinctive patterns.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Multi-color']
  },
  {
    id: 'jordan-voodoo',
    name: 'Jordan Voodoo',
    price: 3499,
    images: [{ url: '/WhatsApp Image 2026-02-05 at 3.15.11 PM.jpeg', hint: 'voodoo' }],
    description: 'Unique mystical aesthetic with earthy tones.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Earthy Multi']
  },
  {
    id: 'asics-gel',
    name: 'ASICS GEL Sneakers',
    price: 2999,
    images: [{ url: '/WhatsApp Image 2026-02-05 at 3.21.19 PM.jpeg', hint: 'asics gel' }],
    description: 'High-performance comfort for both training and street style.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-active',
    name: 'Kids Active Sneakers',
    price: 1799,
    images: [{ url: '/WhatsApp Image 2026-02-05 at 3.23.05 PM.jpeg', hint: 'kids active' }],
    description: 'Modern active sneakers built for junior performance.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: [],
    sizes: ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-urban',
    name: 'Kids Urban Sneakers',
    price: 1799,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 10.01.19 AM.jpeg', hint: 'kids urban' }],
    description: 'Durable and stylish for school or weekend adventures.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: [],
    sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-open',
    name: 'Kids Open Comfort',
    price: 1499,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 10.02.21 AM.jpeg', hint: 'kids sandals' }],
    description: 'Ultra-comfortable open-toe sandals for all-day play.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: [],
    sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
    colors: ['Multi-color']
  },
  {
    id: 'samoa-classic',
    name: 'Samoa Classic',
    price: 2799,
    images: [{ url: '/WhatsApp Image 2026-02-06 at 10.59.37 AM (1).jpeg', hint: 'samoa classic' }],
    description: 'Timeless heritage style with modern everyday comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: [],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic White']
  }
];

export const getProducts = () => products;
export const getAllProducts = () => products;

export const getHourlyRotatingProducts = (limit: number = 12) => {
  return products.slice(0, limit);
};

export const getHeroProducts = () => products.slice(0, 8);
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (categoryId: string) => products.filter(p => p.category === categoryId);
export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getRecommendedProductsByIds = (ids: string[]) => products.filter(p => ids.includes(p.id));
