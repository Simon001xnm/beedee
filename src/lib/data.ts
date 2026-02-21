
import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getPlaceholderImage = () => {
  return { 
    url: 'https://picsum.photos/seed/footwear-placeholder/600/600', 
    hint: 'footwear' 
  };
}

const getImageById = (id: string) => {
    const img = PlaceHolderImages.find(i => i.id === id);
    if (img) {
        return { url: img.imageUrl, hint: img.imageHint };
    }
    return getPlaceholderImage();
}

export const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', parentId: null, imageUrl: 'https://picsum.photos/seed/sneakers/600/600', imageHint: 'sneakers' },
  { id: 'mens-shoes', name: 'Men\'s Shoes', parentId: null, imageUrl: 'https://picsum.photos/seed/mens-shoes/600/600', imageHint: 'mens shoes' },
  { id: 'ladies-shoes', name: 'Ladies\' Shoes', parentId: null, imageUrl: 'https://picsum.photos/seed/ladies-shoes/600/600', imageHint: 'ladies shoes' },
  { id: 'kids-shoes', name: 'Kids\' Shoes', parentId: null, imageUrl: 'https://picsum.photos/seed/kids-shoes/600/600', imageHint: 'kids shoes' },
  { id: 'formal-shoes', name: 'Formal Shoes', parentId: 'mens-shoes', imageUrl: 'https://picsum.photos/seed/formal/600/600', imageHint: 'formal shoes' },
  { id: 'ladies-boots', name: 'Boots', parentId: 'ladies-shoes', imageUrl: 'https://picsum.photos/seed/boots/600/600', imageHint: 'boots' },
];

export const products: Product[] = [
  { id: 'p0', name: 'New Balance Special Offer', price: 2999, images: [getImageById('nb-offer-1'), getImageById('nb-offer-2'), getImageById('nb-offer-3')], description: 'Limited time offer on New Balance sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p1', name: 'Samoa', price: 2799, images: [getImageById('samoa-new-1'), getImageById('samoa-new-2')], description: 'Classic Samoa sneakers for comfort.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p2', name: 'Kids open', price: 1499, images: [getImageById('kids-open-1'), getImageById('kids-open-2'), getImageById('kids-open-3')], description: 'Breathable open shoes for kids.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['21-36'], colors: ['Multi'] },
  { id: 'p3', name: 'Kids Sneakers (Toddler)', price: 1799, images: [getImageById('kids-sneaker-v5-5')], description: 'Stylish sneakers for toddlers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p4', name: 'Kids Sneakers', price: 1799, images: [getImageById('kids-sneaker-v4-1'), getImageById('kids-sneaker-v4-2')], description: 'Durable kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p5', name: 'ASICS GEL sneakers', price: 2999, images: [getImageById('asics-gel-1'), getImageById('asics-gel-2')], description: 'High-performance ASICS GEL.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p6', name: 'Jordan Voodoo', price: 3499, images: [getImageById('jordan-voodoo-1'), getImageById('jordan-voodoo-2')], description: 'Exclusive Jordan Voodoo design.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p7', name: 'Bape star', price: 2999, images: [getImageById('bape-star-1'), getImageById('bape-star-2')], description: 'Premium Bape star streetwear.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p8', name: 'Nike LD waffle', price: 3499, images: [getImageById('nike-ld-waffle-1')], description: 'Iconic Nike LD waffle.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p9', name: 'New Balance 9060', price: 3499, images: [getImageById('nb-9060-1'), getImageById('nb-9060-2')], description: 'Futuristic New Balance 9060.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p10', name: 'Asics', price: 3499, images: [getImageById('asics-new-1'), getImageById('asics-new-2')], description: 'Classic Asics performance.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p11', name: 'Men sandals', price: 1800, images: [getImageById('men-sandals-new-1'), getImageById('men-sandals-new-2')], description: 'Comfortable casual sandals.', category: 'mens-shoes', subcategory: null, relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p12', name: 'Soccer boots', price: 3999, images: [getImageById('soccer-boot-1'), getImageById('soccer-boot-2')], description: 'Professional soccer boots.', category: 'mens-shoes', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p13', name: 'Clarks', price: 2999, images: [getImageById('clarks-1')], description: 'Elegant Clarks shoes.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p15', name: 'Polo loafer', price: 2499, images: [getImageById('polo-loafer-1')], description: 'Stylish Polo loafers.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
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
