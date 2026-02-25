
import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getPlaceholderImage = (seed: string) => {
  return { 
    url: `https://picsum.photos/seed/${seed}/800/1000`, 
    hint: 'footwear' 
  };
}

const getImageById = (id: string) => {
    const img = PlaceHolderImages.find(i => i.id === id);
    if (img) {
        return { url: img.imageUrl, hint: img.imageHint };
    }
    return getPlaceholderImage(id);
}

export const categories: Category[] = [
  { id: 'sneaker-lab', name: 'The Sneaker Lab', parentId: null, imageUrl: 'https://picsum.photos/seed/cat-sneaker/600/400', imageHint: 'sneakers' },
  { id: 'gentlemens-quarters', name: 'Gentlemen\'s Quarters', parentId: null, imageUrl: 'https://picsum.photos/seed/cat-men/600/400', imageHint: 'mens shoes' },
  { id: 'ladies-vault', name: 'The Ladies\' Vault', parentId: null, imageUrl: 'https://picsum.photos/seed/cat-ladies/600/400', imageHint: 'ladies shoes' },
  { id: 'mini-icons', name: 'Mini Icons', parentId: null, imageUrl: 'https://picsum.photos/seed/cat-kids/600/400', imageHint: 'kids shoes' },
];

export const products: Product[] = [
  { id: 'p0', name: 'New Balance Special Offer', price: 2999, images: [getImageById('nb-offer-1'), getImageById('nb-offer-2'), getImageById('nb-offer-3')], description: 'Limited time offer on New Balance sneakers featuring premium cushioning and classic style.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p9', 'p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p1', name: 'Samoa Classic', price: 2799, images: [getImageById('samoa-new-1'), getImageById('samoa-new-2')], description: 'The timeless Samoa sneakers, rebuilt for modern comfort and everyday urban wear.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p0'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p2', name: 'Kids Open Comfort', price: 1499, images: [getImageById('kids-open-1'), getImageById('kids-open-2'), getImageById('kids-open-3')], description: 'Breathable and secure open shoes designed for active kids.', category: 'mini-icons', subcategory: null, relatedProducts: ['p3', 'p4'], sizes: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'], colors: ['Multi'] },
  { id: 'p3', name: 'Kids Sneakers (Toddler)', price: 1799, images: [getImageById('kids-sneaker-v5-5')], description: 'Stylish and supportive sneakers perfect for little feet on the move.', category: 'mini-icons', subcategory: null, relatedProducts: ['p2', 'p4'], sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], colors: ['Multi'] },
  { id: 'p4', name: 'Durable Kids Sneakers', price: 1799, images: [getImageById('kids-sneaker-v4-1'), getImageById('kids-sneaker-v4-2')], description: 'Rugged construction meets fun design in these durable kids sneakers.', category: 'mini-icons', subcategory: null, relatedProducts: ['p2', 'p3'], sizes: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], colors: ['Multi'] },
  { id: 'p5', name: 'ASICS GEL Performance', price: 2999, images: [getImageById('asics-gel-1'), getImageById('asics-gel-2')], description: 'High-performance ASICS GEL sneakers offering superior shock absorption.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p6', name: 'Jordan Voodoo Edition', price: 3499, images: [getImageById('jordan-voodoo-1'), getImageById('jordan-voodoo-2')], description: 'The exclusive Jordan Voodoo, featuring hand-crafted details and premium materials.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p8'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p7', name: 'Bape Star Streetwear', price: 2999, images: [getImageById('bape-star-1'), getImageById('bape-star-2')], description: 'Premium Bape Star sneakers for the ultimate streetwear statement.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p6'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p8', name: 'Nike LD Waffle', price: 3499, images: [getImageById('nike-ld-waffle-1')], description: 'The iconic Nike LD Waffle, combining heritage track style with a modern twist.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p6', 'p9'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p9', name: 'New Balance 9060', price: 3499, images: [getImageById('nb-9060-1'), getImageById('nb-9060-2')], description: 'Futuristic New Balance 9060, pushing the boundaries of traditional sneaker design.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p0', 'p10'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p10', name: 'Asics Sport Classic', price: 3499, images: [getImageById('asics-new-1'), getImageById('asics-new-2')], description: 'Dependable Asics performance sneakers for sports and daily activity.', category: 'sneaker-lab', subcategory: null, relatedProducts: ['p5', 'p9'], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p11', name: 'Handcrafted Men Sandals', price: 1800, images: [getImageById('men-sandals-new-1'), getImageById('men-sandals-new-2')], description: 'Premium leather sandals designed for absolute comfort and casual elegance.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p15'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p12', name: 'Pro Soccer Boots', price: 3999, images: [getImageById('soccer-boot-1'), getImageById('soccer-boot-2')], description: 'Professional-grade soccer boots for maximum grip and ball control.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: [], sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p13', name: 'Clarks Elegant Formals', price: 2999, images: [getImageById('clarks-1')], description: 'Timeless Clarks formal shoes, perfect for the office or special occasions.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p15'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
  { id: 'p15', name: 'Polo Loafer Elite', price: 2499, images: [getImageById('polo-loafer-1')], description: 'Sophisticated Polo loafers that define the modern gentleman.', category: 'gentlemens-quarters', subcategory: null, relatedProducts: ['p13', 'p11'], sizes: ['40', '41', '42', '43', '44', '45'], colors: ['Multi'] },
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
