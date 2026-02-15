
import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (image) {
    return { url: image.imageUrl, hint: image.imageHint };
  }
  // Robust fallback for missing registry entries
  return { 
    url: `https://picsum.photos/seed/${id || 'shoe'}/600/600`, 
    hint: 'shoe' 
  };
}

export const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', parentId: null, imageUrl: getImage('jordan-1').url, imageHint: getImage('jordan-1').hint },
  { id: 'mens-shoes', name: 'Men\'s Shoes', parentId: null, imageUrl: getImage('lacoste-1').url, imageHint: getImage('lacoste-1').hint },
  { id: 'ladies-shoes', name: 'Ladies\' Shoes', parentId: null, imageUrl: getImage('tommy-boots-1').url, imageHint: getImage('tommy-boots-1').hint },
  { id: 'kids-shoes', name: 'Kids\' Shoes', parentId: null, imageUrl: getImage('kids-sneaker-1').url, imageHint: getImage('kids-sneaker-1').hint },
  { id: 'formal-shoes', name: 'Formal Shoes', parentId: 'mens-shoes', imageUrl: getImage('lacoste-1').url, imageHint: getImage('lacoste-1').hint },
  { id: 'ladies-boots', name: 'Boots', parentId: 'ladies-shoes', imageUrl: getImage('tommy-boots-1').url, imageHint: getImage('tommy-boots-1').hint },
  { id: 'soccer-boots', name: 'Soccer Boots', parentId: 'mens-shoes', imageUrl: getImage('soccer-boot-1').url, imageHint: getImage('soccer-boot-1').hint },
];

export const products: Product[] = [
    {
        id: 'nb-special-offer',
        name: 'New Balance Special Offer',
        price: 2999,
        images: [
            getImage('nb-offer-1'),
            getImage('nb-offer-2'),
            getImage('nb-offer-3'),
        ],
        description: 'OFFER OFFER! Grab these stylish New Balance sneakers at an incredible price. Perfect for everyday comfort and a modern look.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
        colors: ['Multi-color'],
    },
    {
        id: 'samoa-new',
        name: 'Samoa',
        price: 2799,
        images: [
            getImage('samoa-new-1'),
            getImage('samoa-new-2'),
        ],
        description: 'The Samoa is a classic trainer loved for its sleek silhouette and iconic toe bumper. A versatile choice for any casual look, offering timeless style and exceptional comfort.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['40', '41', '42', '43', '44', '45'],
        colors: ['Multi-color'],
    },
    {
        id: 'kids-open',
        name: 'Kids open',
        price: 1499,
        images: [
            getImage('kids-open-1'),
            getImage('kids-open-2'),
            getImage('kids-open-3'),
            getImage('kids-open-4'),
        ],
        description: 'Comfortable and stylish open shoes for kids, perfect for warm weather and casual outings. Designed for durability and ease of wear.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: [],
        sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
        colors: ['Multi-color'],
    },
    {
        id: 'kids-sneakers-v5',
        name: 'Kids Sneakers',
        price: 1799,
        images: [
            getImage('kids-sneaker-v4-1'),
            getImage('kids-sneaker-v4-2'),
            getImage('kids-sneaker-v4-3'),
            getImage('kids-sneaker-v4-4'),
            getImage('kids-sneaker-v5-5'),
        ],
        description: 'Perfect for the little ones, these stylish kids sneakers are designed for comfort and durability. Ideal for toddlers and early walkers.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: [],
        sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        colors: ['Multi-color'],
    },
    {
        id: 'kids-sneakers-v4',
        name: 'Kids Sneakers',
        price: 1799,
        images: [
            getImage('kids-sneaker-v4-1'),
            getImage('kids-sneaker-v4-2'),
            getImage('kids-sneaker-v4-3'),
            getImage('kids-sneaker-v4-4'),
        ],
        description: 'Durable and stylish sneakers for active kids. Perfect for school and play, offering great support and comfort.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: [],
        sizes: ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'],
        colors: ['Multi-color'],
    },
    {
        id: 'asics-gel-sneakers',
        name: 'ASICS GEL sneakers',
        price: 2999,
        images: [
            getImage('asics-gel-1'),
            getImage('asics-gel-2'),
        ],
        description: 'The ASICS GEL sneakers offer superior cushioning and stability for all-day comfort. Featuring GEL technology for impact absorption and a sleek design that works for both active and casual wear.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['36', '37', '38', '39', '40', '41'],
        colors: ['Multi-color'],
    },
    {
        id: 'jordan-voodoo',
        name: 'Jordan Voodoo',
        price: 3499,
        images: [
            getImage('jordan-voodoo-1'),
            getImage('jordan-voodoo-2'),
        ],
        description: 'The Jordan Voodoo features a unique, patchwork-inspired design with premium materials and distinctive details. A standout addition to any sneaker collection, offering both iconic style and exceptional comfort.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
        colors: ['Multi-color'],
    },
    {
        id: 'bape-star',
        name: 'Bape star',
        price: 2999,
        images: [
            getImage('bape-star-1'),
            getImage('bape-star-2'),
            getImage('bape-star-3'),
        ],
        description: 'Iconic Bape Star sneakers featuring a bold design and signature star logo. Crafted with premium materials for a distinct street-style look and lasting comfort.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['40', '41', '42', '43', '44'],
        colors: ['Multi-color'],
    },
    {
        id: 'nike-ld-waffle',
        name: 'Nike LD waffle',
        price: 3499,
        images: [
            getImage('nike-ld-waffle-1'),
        ],
        description: 'The Nike LD Waffle is a fusion of two iconic Nike silhouettes: the LDV and the Waffle Daybreak. Featuring a unique doubled-up aesthetic with overlapping tongues, Swooshes, and lashes, it offers a distinct look combined with classic waffle traction.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['40', '41', '42', '43', '44', '45'],
        colors: ['Multi-color'],
    },
    {
        id: 'nb-9060',
        name: 'New Balance 9060',
        price: 3499,
        images: [
            getImage('nb-9060-v2-1'),
            getImage('nb-9060-v2-2'),
        ],
        description: 'The New Balance 9060 is a new expression of refined style and innovation-led design. It reinterprets familiar elements from classic 99X models with a warped sensibility inspired by the futuristic, visible tech aesthetic of the Y2K era.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
        colors: ['Multi-color'],
    },
    {
        id: 'asics-sneakers',
        name: 'Asics',
        price: 3499,
        images: [
            getImage('asics-new-1'),
            getImage('asics-new-2'),
            getImage('asics-new-3'),
            getImage('asics-new-4'),
            getImage('asics-new-5'),
        ],
        description: 'High-performance Asics sneakers designed for comfort and durability. Perfect for running or casual wear with a sleek, modern aesthetic.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['36', '37', '38', '39', '40'],
        colors: ['Multi-color'],
    },
    {
        id: 'men-sandals',
        name: 'Men sandals',
        price: 1800,
        images: [
            getImage('men-sandals-new-1'),
            getImage('men-sandals-new-2'),
            getImage('men-sandals-new-3'),
        ],
        description: 'Stylish and comfortable men\'s sandals, perfect for warm weather or casual wear. Crafted for durability and a relaxed fit.',
        category: 'mens-shoes',
        subcategory: null,
        relatedProducts: [],
        sizes: ['40', '41', '42', '43', '44', '45'],
        colors: ['Black', 'Brown'],
    },
    {
        id: 'soccer-boots-pro',
        name: 'Soccer boots',
        price: 3999,
        images: [
            getImage('soccer-boot-1'),
            getImage('soccer-boot-2'),
            getImage('soccer-boot-3'),
            getImage('soccer-boot-4'),
            getImage('soccer-boot-5'),
            getImage('soccer-boot-6'),
        ],
        description: 'Take your game to the next level with these high-performance soccer boots. Engineered for maximum traction and precision control.',
        category: 'mens-shoes',
        subcategory: 'soccer-boots',
        relatedProducts: [],
        sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
        colors: ['Multi-color'],
    },
    {
        id: 'clarks-official',
        name: 'Clarks',
        price: 2999,
        images: [
            getImage('clarks-1'),
            getImage('clarks-2'),
            getImage('clarks-3'),
            getImage('clarks-4'),
        ],
        description: 'Timeless comfort and classic style with Clarks. Crafted with premium materials for a refined look and exceptional durability.',
        category: 'mens-shoes',
        subcategory: 'formal-shoes',
        relatedProducts: [],
        sizes: ['40', '41', '42', '43', '44'],
        colors: ['Brown', 'Black'],
    },
    {
        id: 'polo-loafer-new',
        name: 'Polo loafer',
        price: 2499,
        images: [
            getImage('polo-loafer-1'),
        ],
        description: 'Sophisticated and comfortable, the Polo Loafer is a timeless choice for a refined look.',
        category: 'mens-shoes',
        subcategory: 'formal-shoes',
        relatedProducts: [],
        sizes: ['39', '40', '41', '42', '43', '44', '45'],
        colors: ['Black', 'Brown'],
    },
    {
        id: 'elsa-shoes',
        name: 'Elsa',
        price: 1499,
        images: [
            getImage('elsa-1'),
            getImage('elsa-2'),
        ],
        description: 'Let your little one step into a fairytale with these enchanting Elsa shoes. Perfect for fans of the frozen magic.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: [],
        sizes: ['26', '27', '28', '29', '30', '31', '32', '33'],
        colors: ['Purple', 'Pink'],
    },
    {
        id: 'bow-girls',
        name: 'Bow Girls',
        price: 1499,
        images: [
            getImage('bow-girls-1'),
            getImage('bow-girls-2'),
        ],
        description: 'Adorable and stylish, these "Bow Girls" shoes are perfect for your little fashionista.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: [],
        sizes: ['26', '27', '28', '29', '30', '31', '32', '33', '34', '35'],
        colors: ['Pink', 'White'],
    },
    {
        id: 'nike-air-force-1-07',
        name: 'Nike Air Force 1 \'07',
        price: 3499,
        images: [
            getImage('nike-airforce-1'),
            getImage('nike-airforce-2'),
        ],
        description: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball OG that puts a fresh spin on what you know best.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
        colors: ['Triple White', 'Triple Black'],
    },
    {
        id: 'tommy-hilfiger-high-boots',
        name: 'Tommy Hilfiger High Boots',
        price: 3499,
        images: [
            getImage('tommy-boots-1'),
            getImage('tommy-boots-2'),
        ],
        description: 'Make a statement with these stunning high boots from Tommy Hilfiger.',
        category: 'ladies-shoes',
        subcategory: 'ladies-boots',
        relatedProducts: [],
        sizes: ['36', '37', '38', '39', '40', '41', '42'],
        colors: ['Black', 'Brown'],
    },
    {
        id: 'polo-ralph-lauren-sneaker',
        name: 'Polo Ralph Lauren Sneaker',
        price: 2499,
        images: [
            getImage('polo-sneaker')
        ],
        description: 'A classic sneaker from Polo Ralph Lauren that combines preppy style with athletic comfort.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: [],
        sizes: ['38', '39', '40', '41', '42', '43'],
        colors: ['Navy', 'White', 'Black'],
    }
];

export const getProducts = () => products;
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.category === categoryId || p.subcategory === categoryId);
}
export const getCategoryById = (id: string) => categories.find(c => c.id === id);
export const getFeaturedProducts = (limit: number = 4) => products.slice(0, limit);
export const getRelatedProducts = (product: Product) => {
    return products.filter(p => product.relatedProducts.includes(p.id) && p.id !== product.id);
}
export const getRecommendedProductsByIds = (ids: string[]) => {
  return products.filter(p => ids.includes(p.id));
}
