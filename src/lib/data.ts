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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
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
    relatedProducts: ['timberland', 'billionaire-boots'],
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
    description: 'The Asics Elite represents the pinnacle of performance and style. Engineered for maximum comfort and durability.',
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
    description: 'The Jordan 13 is a legendary basketball silhouette known for its unique design and exceptional performance.',
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
    description: 'Timeless elegance meets modern comfort. These Hermes sandals are handcrafted for the sophisticated individual.',
    category: 'gentlemens-quarters',
    subcategory: null,
    relatedProducts: ['mens-casual-loafers', 'mens-comfort-sandals'],
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Multi-color']
  },
  {
    id: 'billionaire-boots',
    name: 'Billionaire Boots',
    price: 4499,
    images: [
      { url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM (1).jpeg', hint: 'billionaire boots' },
      { url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM (2).jpeg', hint: 'billionaire boots side' },
      { url: '/WhatsApp Image 2026-02-07 at 1.11.56 PM.jpeg', hint: 'billionaire boots detail' }
    ],
    description: 'Exquisite luxury boots crafted for those who demand the finest. Combining premium materials with a bold design, these boots are the ultimate statement of success.',
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
      { url: '/WhatsApp Image 2026-02-07 at 1.08.30 PM.jpeg', hint: 'max air' },
      { url: '/WhatsApp Image 2026-02-07 at 1.08.30 PM (1).jpeg', hint: 'max air side' }
    ],
    description: 'Experience superior cushioning and legendary style with the Max Air. Designed for ultimate comfort and a standout look.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-vomero', 'nike-zoom', 'sb-dunks', 'jordan-3'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'timberland',
    name: 'Timberland Boots',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-07 at 1.08.04 PM.jpeg', hint: 'timberland boots' },
      { url: '/WhatsApp Image 2026-02-07 at 1.08.04 PM (3).jpeg', hint: 'timberland side' },
      { url: '/WhatsApp Image 2026-02-07 at 1.08.04 PM (2).jpeg', hint: 'timberland detail' }
    ],
    description: 'Classic Timberland boots, built for durability and rugged style. A staple for any outdoor or urban wardrobe.',
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
      { url: '/WhatsApp Image 2026-02-07 at 11.40.57 AM.jpeg', hint: 'under armour' },
      { url: '/WhatsApp Image 2026-02-07 at 11.40.57 AM (1).jpeg', hint: 'under armour side' }
    ],
    description: 'High-performance Under Armour sneakers designed for ultimate durability and comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-vomero', 'nike-zoom', 'asics-performance-runner'],
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
    description: 'The Samba single sole brings a sleek, low-profile look to the classic indoor soccer silhouette.',
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
      { url: '/WhatsApp Image 2026-02-06 at 3.52.33 PM (2).jpeg', hint: 'sb dunks profile' }
    ],
    description: 'The SB Dunk is a legendary skate shoe that has become a staple in streetwear.',
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
      { url: '/WhatsApp Image 2026-02-06 at 3.50.30 PM.jpeg', hint: 'jordan 3 sneakers' }
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
      { url: '/WhatsApp Image 2026-02-06 at 3.47.22 PM (1).jpeg', hint: 'new balance sneakers' }
    ],
    description: 'The New Balance classic collection offers timeless style and exceptional comfort.',
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
      { url: '/WhatsApp Image 2026-02-03 at 10.00.24 AM (2).jpeg', hint: 'soccer boots side' }
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
      { url: '/WhatsApp Image 2026-02-03 at 10.04.28 AM.jpeg', hint: 'mens casual loafers' }
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
      { url: '/WhatsApp Image 2026-02-03 at 12.03.18 PM (1).jpeg', hint: 'mens comfort sandals' }
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
      { url: '/WhatsApp Image 2026-02-04 at 11.55.00 AM (1).jpeg', hint: 'asics performance runner' }
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
      { url: '/WhatsApp Image 2026-02-04 at 11.55.52 AM.jpeg', hint: 'mens handcrafted sandals' }
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
      { url: '/WhatsApp Image 2026-02-04 at 12.22.51 PM (1).jpeg', hint: 'new balance 9060' }
    ],
    description: 'The New Balance 9060 is a new expression of refined style.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-ld-waffle', 'nike-zoom'],
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Multi-color']
  },
  {
    id: 'nike-zoom',
    name: 'Nike zoom',
    price: 2999,
    images: [
      { url: '/WhatsApp Image 2026-02-04 at 1.55.05 PM (1).jpeg', hint: 'nike zoom sneakers' }
    ],
    description: 'Experience responsive cushioning and an iconic design with the Nike Zoom.',
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
      { url: '/WhatsApp Image 2026-02-05 at 3.04.36 PM.jpeg', hint: 'bape star sneakers' }
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
      { url: '/WhatsApp Image 2026-02-05 at 3.21.19 PM.jpeg', hint: 'asics gel sneakers' }
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
      { url: '/WhatsApp Image 2026-02-05 at 3.23.05 PM.jpeg', hint: 'kids active sneakers' }
    ],
    description: 'Modern active sneakers for juniors. Built for performance and style.',
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
      { url: '/WhatsApp Image 2026-02-06 at 10.01.19 AM.jpeg', hint: 'kids sneakers' }
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
      { url: '/WhatsApp Image 2026-02-06 at 10.59.37 AM (1).jpeg', hint: 'samoa sneakers' }
    ],
    description: 'A timeless silhouette that combines heritage style with modern comfort.',
    category: 'sneaker-lab',
    subcategory: null,
    relatedProducts: ['nike-zoom', 'bape-star'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Classic White']
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
  // We take the top premium non-offer items
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
