import type { Product, Category } from './types';

// IDs of products that should be exclusive to the Hero section
const HERO_ONLY_IDS: string[] = [];

// IDs of products that are for the landing page grid (image-based offers)
const LANDING_OFFER_IDS: string[] = [
  'offer-landing-20', 'offer-landing-19', 'offer-landing-18', 'offer-landing-17',
  'offer-landing-16', 'offer-landing-15', 'offer-landing-14', 'offer-landing-13',
  'offer-landing-12', 'offer-landing-11', 'offer-landing-10', 'offer-landing-9',
  'offer-landing-8', 'offer-landing-7', 'offer-landing-6', 'offer-landing-5',
  'offer-landing-4', 'offer-landing-3', 'offer-landing-2', 'offer-landing-1'
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
      { url: '/WhatsApp Image 2026-03-31 at 3.32.51 PM.jpeg', hint: 'asics elite side' }
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
  },
  {
    id: 'puma-gt',
    name: 'Puma GT',
    price: 3799,
    images: [
      { url: '/WhatsApp Image 2026-02-13 at 1.16.09 PM (1).jpeg', hint: 'puma gt' },
      { url: '/WhatsApp Image 2026-02-13 at 1.16.09 PM.jpeg', hint: 'puma gt side' }
    ],
    description: 'Dynamic and stylish, the Puma GT offers a perfect blend of performance and street-ready design. Built for comfort and speed on the streets of Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['max-air', 'nike-zoom', 'under-armour'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'jellyfish-sneakers',
    name: 'Jellyfish sneakers',
    price: 4499,
    images: [
      { url: '/WhatsApp Image 2026-02-12 at 10.49.10 AM.jpeg', hint: 'jellyfish sneakers' },
      { url: '/WhatsApp Image 2026-02-12 at 10.49.11 AM (1).jpeg', hint: 'jellyfish sneakers side' }
    ],
    description: 'Distinctive and modern, the Jellyfish sneakers offer a unique aesthetic with superior comfort. A bold choice for the trendsetters in Nairobi.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['max-air', 'nike-zoom'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-boots',
    name: 'Kids Boots',
    price: 2499,
    images: [
      { url: '/WhatsApp Image 2026-02-12 at 10.48.05 AM (1).jpeg', hint: 'kids boots' },
      { url: '/WhatsApp Image 2026-02-12 at 10.48.05 AM.jpeg', hint: 'kids boots side' }
    ],
    description: 'Rugged and stylish boots for kids, designed for durability and comfort. Perfect for any adventure in Nairobi.',
    category: 'mini-icons',
    subcategory: null,
    relatedProducts: ['kids-active-sneakers', 'kids-sneakers'],
    sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38'],
    colors: ['Tan/Brown']
  },
  {
    id: 'timberland-v3',
    name: 'Timberland',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-12 at 4.10.28 PM.jpeg', hint: 'timberland boots' },
      { url: '/WhatsApp Image 2026-02-12 at 4.10.29 PM.jpeg', hint: 'timberland boots side' }
    ],
    description: 'Rugged and iconic Timberland boots, designed for the modern trailblazer. Crafted with premium materials for ultimate durability and comfort on the streets of Nairobi.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland', 'timberland-premium', 'billionaire-boots'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'timberland-premium',
    name: 'Timberland Premium',
    price: 3999,
    images: [
      { url: '/WhatsApp Image 2026-02-11 at 11.45.15 AM.jpeg', hint: 'timberland premium' }
    ],
    description: 'The latest addition to our Timberland collection, featuring premium materials and an iconic silhouette. Built for durability and style on the streets of Nairobi.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland', 'billionaire-boots', 'mens-casual-loafers'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Tan']
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `offer-landing-${20 - i}`,
    name: `Clearance Offer ${20 - i}`,
    price: 0,
    images: [{ url: `/WhatsApp Image 2026-06-17 at 22.21.${(40 + i).toString().padStart(2, '0')}.jpeg`, hint: 'clearance sneaker' }],
    description: 'Exclusive clearance arrival. See image for detailed pricing and model specs.',
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
      { url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM (1).jpeg', hint: 'billionaire boots' },
      { url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM (2).jpeg', hint: 'billionaire boots side' }
    ],
    description: 'Exquisite luxury boots crafted for those who demand the finest.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['timberland', 'mens-casual-loafers'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'max-air',
    name: 'Max Air',
    price: 3999,
    images: [
      { url: '/WhatsApp Image 2026-02-07 at 1.08.30 PM.jpeg', hint: 'max air' }
    ],
    description: 'Experience superior cushioning and legendary style with the Max Air.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-vomero', 'nike-zoom'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'timberland',
    name: 'Timberland Boots',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-07 at 1.08.04 PM.jpeg', hint: 'timberland boots' }
    ],
    description: 'Classic Timberland boots, built for durability and rugged style.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-casual-loafers', 'mens-comfort-sandals'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Tan']
  },
  {
    id: 'under-armour',
    name: 'Under Armour',
    price: 3799,
    images: [
      { url: '/WhatsApp Image 2026-02-07 at 11.40.57 AM.jpeg', hint: 'under armour' }
    ],
    description: 'High-performance Under Armour sneakers designed for ultimate durability.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-vomero', 'nike-zoom'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'samba-single-sole',
    name: 'Samba single sole',
    price: 2499,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 5.38.03 PM (1).jpeg', hint: 'samba single sole' }
    ],
    description: 'The Samba single sole brings a sleek, low-profile look.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['floral-samba', 'nb-classic-sneakers'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Classic White/Black']
  },
  {
    id: 'floral-samba',
    name: 'Floral Samba',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 5.37.25 PM.jpeg', hint: 'floral samba' }
    ],
    description: 'A beautiful floral take on the classic Samba silhouette.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['samoa-classic', 'nb-classic-sneakers'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Floral Multi']
  },
  {
    id: 'nike-vomero',
    name: 'Nike Vomero',
    price: 3799,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 5.36.55 PM.jpeg', hint: 'nike vomero' }
    ],
    description: 'The Nike Vomero offers superior cushioning and a smooth ride.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom', 'nb-9060'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Multi-color']
  },
  {
    id: 'sb-dunks',
    name: 'SB Dunks',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 3.52.33 PM (2).jpeg', hint: 'sb dunks' }
    ],
    description: 'The SB Dunk is a legendary skate shoe that has become a staple.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-3', 'nb-9060'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'jordan-3',
    name: 'Jordan 3',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 3.50.30 PM.jpeg', hint: 'jordan 3' }
    ],
    description: 'The Jordan 3 is a legendary silhouette featuring the iconic elephant print.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-voodoo', 'nike-zoom'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic Multi']
  },
  {
    id: 'nb-classic-sneakers',
    name: 'New Balance Classic',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-06 at 3.47.22 PM (1).jpeg', hint: 'new balance' }
    ],
    description: 'Timeless style and exceptional comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nb-9060', 'asics-performance-runner'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'soccer-boots',
    name: 'Elite Soccer Boots',
    price: 3999,
    images: [
      { url: '/WhatsApp Image 2026-02-03 at 10.00.24 AM (2).jpeg', hint: 'soccer boots' }
    ],
    description: 'Engineered for elite performance on the pitch.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-performance-runner', 'nike-zoom'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Professional Multi']
  },
  {
    id: 'mens-casual-loafers',
    name: 'Men\'s Casual Loafers',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-03 at 10.04.28 AM.jpeg', hint: 'mens loafers' }
    ],
    description: 'Sophisticated and versatile casual loafers for the modern man.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-handcrafted-sandals', 'mens-comfort-sandals'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'mens-comfort-sandals',
    name: 'Men\'s Comfort Sandals',
    price: 1800,
    images: [
      { url: '/WhatsApp Image 2026-02-03 at 12.03.18 PM (1).jpeg', hint: 'mens sandals' }
    ],
    description: 'Lightweight and durable comfort sandals for men.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-handcrafted-sandals', 'samoa-classic'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'asics-performance-runner',
    name: 'ASICS Performance Runner',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 11.55.00 AM (1).jpeg', hint: 'asics runner' }
    ],
    description: 'Engineered for the ultimate running experience.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-gel-sneakers', 'nike-zoom'],
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Multi-color']
  },
  {
    id: 'mens-handcrafted-sandals',
    name: 'Men\'s Handcrafted Sandals',
    price: 1999,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 11.55.52 AM.jpeg', hint: 'handcrafted sandals' }
    ],
    description: 'Premium handcrafted men\'s sandals designed for ultimate comfort.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['samoa-classic', 'nb-9060'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Tan/Brown']
  },
  {
    id: 'nb-9060',
    name: 'New Balance 9060',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 12.22.51 PM (1).jpeg', hint: 'nb 9060' }
    ],
    description: 'The New Balance 9060 is a new expression of refined style.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-zoom',
    name: 'Nike zoom',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 1.55.05 PM (1).jpeg', hint: 'nike zoom' }
    ],
    description: 'Experience responsive cushioning and an iconic design.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['bape-star', 'jordan-voodoo'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'bape-star',
    name: 'Bape star',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.04.36 PM.jpeg', hint: 'bape star' }
    ],
    description: 'The Bape Star collection brings bold, iconic streetwear design.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['jordan-voodoo', 'asics-gel-sneakers'],
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Multi-color']
  },
  {
    id: 'jordan-voodoo',
    name: 'Jordan Voodoo',
    price: 3499,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.15.11 PM.jpeg', hint: 'jordan voodoo' }
    ],
    description: 'The Jordan Voodoo edition brings a unique, mystical aesthetic.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['asics-gel-sneakers', 'samoa-classic'],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Earthy Multi']
  },
  {
    id: 'asics-gel-sneakers',
    name: 'ASICS GEL Sneakers',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.21.19 PM.jpeg', hint: 'asics gel' }
    ],
    description: 'High-performance ASICS GEL sneakers designed for ultimate comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['samoa-classic', 'jordan-voodoo'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Multi-color']
  },
  {
    id: 'kids-active-sneakers',
    name: 'Kids Active Sneakers',
    price: 1799,
    images: [
      { url: '/WhatsApp Image 2026-02-05 at 3.23.05 PM.jpeg', hint: 'kids active' }
    ],
    description: 'Modern active sneakers for juniors.',
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
      { url: '/WhatsApp Image 2026-02-06 at 10.01.19 AM.jpeg', hint: 'kids urban' }
    ],
    description: 'Stylish and durable urban sneakers for kids.',
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
      { url: '/WhatsApp Image 2026-02-06 at 10.02.21 AM.jpeg', hint: 'kids sandals' }
    ],
    description: 'Ultra-comfortable open-toe sandals for children.',
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
      { url: '/WhatsApp Image 2026-02-06 at 10.59.37 AM (1).jpeg', hint: 'samoa' }
    ],
    description: 'A timeless silhouette that combines heritage style with modern comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom', 'bape-star'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic White']
  }
];

export const getProducts = () => products.filter(p => !HERO_ONLY_IDS.includes(p.id));

export const getLandingExclusiveProducts = () => products.filter(p => LANDING_OFFER_IDS.includes(p.id));

export const getHeroProducts = () => products.filter(p => !LANDING_OFFER_IDS.includes(p.id)).slice(0, 8);

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
