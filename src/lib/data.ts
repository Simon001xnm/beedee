
import type { Product, Category } from './types';

const getPlaceholderImage = () => {
  return { 
    url: 'https://picsum.photos/seed/footwear-placeholder/600/600', 
    hint: 'footwear' 
  };
}

export const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', parentId: null, imageUrl: 'https://picsum.photos/seed/sneakers/600/600', imageHint: 'sneakers' },
  { id: 'mens-shoes', name: 'Men\'s Shoes', parentId: null, imageUrl: 'https://picsum.photos/seed/mens-shoes/600/600', imageHint: 'mens shoes' },
  { id: 'ladies-shoes', name: 'Ladies\' Shoes', parentId: null, imageUrl: 'https://picsum.photos/seed/ladies-shoes/600/600', imageHint: 'ladies shoes' },
  { id: 'kids-shoes', name: 'Kids\' Shoes', parentId: null, imageUrl: 'https://picsum.photos/seed/kids-shoes/600/600', imageHint: 'kids shoes' },
  { id: 'formal-shoes', name: 'Formal Shoes', parentId: 'mens-shoes', imageUrl: 'https://picsum.photos/seed/formal/600/600', imageHint: 'formal shoes' },
  { id: 'ladies-boots', name: 'Boots', parentId: 'ladies-shoes', imageUrl: 'https://picsum.photos/seed/boots/600/600', imageHint: 'boots' },
  { id: 'soccer-boots', name: 'Soccer Boots', parentId: 'mens-shoes', imageUrl: 'https://picsum.photos/seed/soccer/600/600', imageHint: 'soccer boots' },
];

export const products: Product[] = [
  { id: 'p1', name: 'Samoa', price: 2999, images: [getPlaceholderImage()], description: 'Premium Samoa sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p2', name: 'Kids open', price: 2799, images: [getPlaceholderImage()], description: 'Comfortable kids open shoes.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['21-36'], colors: ['Multi'] },
  { id: 'p3', name: 'Kids Sneakers', price: 1499, images: [getPlaceholderImage()], description: 'Stylish kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p4', name: 'Kids Sneakers', price: 1799, images: [getPlaceholderImage()], description: 'Durable kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['26-37'], colors: ['Multi'] },
  { id: 'p5', name: 'ASICS GEL sneakers', price: 1799, images: [getPlaceholderImage()], description: 'Comfortable ASICS GEL sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p6', name: 'Jordan Voodoo', price: 2999, images: [getPlaceholderImage()], description: 'Iconic Jordan Voodoo.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p7', name: 'Bape star', price: 3499, images: [getPlaceholderImage()], description: 'Classic Bape star sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p8', name: 'Nike LD waffle', price: 2999, images: [getPlaceholderImage()], description: 'Nike LD waffle performance.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p9', name: 'New Balance 9060', price: 3499, images: [getPlaceholderImage()], description: 'Futuristic New Balance 9060.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p10', name: 'Asics', price: 3499, images: [getPlaceholderImage()], description: 'Performance Asics sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p11', name: 'Men sandals', price: 3499, images: [getPlaceholderImage()], description: 'Comfortable men sandals.', category: 'mens-shoes', subcategory: null, relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p12', name: 'Soccer boots', price: 1800, images: [getPlaceholderImage()], description: 'Professional soccer boots.', category: 'mens-shoes', subcategory: 'soccer-boots', relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p13', name: 'Clarks', price: 3999, images: [getPlaceholderImage()], description: 'Classic Clarks footwear.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p14', name: 'Nike shocks', price: 2999, images: [getPlaceholderImage()], description: 'Classic Nike shocks.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p15', name: 'Polo loafer', price: 3999, images: [getPlaceholderImage()], description: 'Elegant Polo loafers.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p16', name: 'Samba double sole', price: 2499, images: [getPlaceholderImage()], description: 'Modern Samba sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p17', name: 'Alexander McQueen', price: 2999, images: [getPlaceholderImage()], description: 'Luxury McQueen sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p18', name: 'Casual Timberland', price: 3499, images: [getPlaceholderImage()], description: 'Durable Timberland shoes.', category: 'mens-shoes', subcategory: null, relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p19', name: 'Naked wolf', price: 2800, images: [getPlaceholderImage()], description: 'Bold Naked wolf sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p20', name: 'Vans', price: 3499, images: [getPlaceholderImage()], description: 'Classic Vans sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p21', name: 'New Amiri', price: 1499, images: [getPlaceholderImage()], description: 'Stylish Amiri sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p22', name: 'New balance 550', price: 3499, images: [getPlaceholderImage()], description: 'Retro New balance 550.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p23', name: 'Men\'s Boots', price: 3499, images: [getPlaceholderImage()], description: 'Rugged men\'s boots.', category: 'mens-shoes', subcategory: null, relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p24', name: 'NBA Lakers', price: 4800, images: [getPlaceholderImage()], description: 'Lakers themed basketball shoes.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p25', name: 'Jordan 1', price: 4499, images: [getPlaceholderImage()], description: 'Iconic Jordan 1 sneakers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p26', name: 'AF custom', price: 3499, images: [getPlaceholderImage()], description: 'Customized Air Force shoes.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p27', name: 'Runstar Motion', price: 3499, images: [getPlaceholderImage()], description: 'Modern Runstar Motion.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p28', name: 'Puma Suede XL', price: 3499, images: [getPlaceholderImage()], description: 'Classic Puma Suede XL.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p29', name: 'Airforce1 Valentines', price: 3499, images: [getPlaceholderImage()], description: 'Special edition AF1.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p30', name: 'Jordan 4 Fear Pack', price: 3499, images: [getPlaceholderImage()], description: 'Jordan 4 Fear Pack.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p31', name: 'Terrex', price: 3499, images: [getPlaceholderImage()], description: 'Outdoor Terrex shoes.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p32', name: 'Converse Leather', price: 3499, images: [getPlaceholderImage()], description: 'Premium leather Converse.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p33', name: 'New Balance', price: 1499, images: [getPlaceholderImage()], description: 'Classic New Balance comfort.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p34', name: 'Atongmu', price: 3499, images: [getPlaceholderImage()], description: 'Stylish Atongmu footwear.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p35', name: 'Sport', price: 1499, images: [getPlaceholderImage()], description: 'Active sport shoes.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p36', name: 'Tick Duck', price: 1499, images: [getPlaceholderImage()], description: 'Fun Tick Duck shoes.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p37', name: 'Elsa', price: 1499, images: [getPlaceholderImage()], description: 'Elsa themed footwear.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p38', name: 'Bow Girls', price: 1499, images: [getPlaceholderImage()], description: 'Cute Bow Girls shoes.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p39', name: 'Shinny S-QMR', price: 1499, images: [getPlaceholderImage()], description: 'Shinny kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p40', name: 'KBS Kids Sneakers', price: 1799, images: [getPlaceholderImage()], description: 'KBS collection for kids.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p41', name: 'Fashion bunny', price: 1499, images: [getPlaceholderImage()], description: 'Cute Fashion bunny shoes.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p42', name: 'Airforce 1 (Kids)', price: 1499, images: [getPlaceholderImage()], description: 'Classic AF1 for kids.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p43', name: 'Kids Sneakers', price: 1799, images: [getPlaceholderImage()], description: 'Quality kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p44', name: 'Kids Sneakers', price: 1499, images: [getPlaceholderImage()], description: 'Comfortable kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p45', name: 'Kids Sneakers', price: 1799, images: [getPlaceholderImage()], description: 'Modern kids sneakers.', category: 'kids-shoes', subcategory: null, relatedProducts: [], sizes: ['19-30'], colors: ['Multi'] },
  { id: 'p46', name: 'Tn Air Max Plus', price: 1799, images: [getPlaceholderImage()], description: 'Tn Air Max Plus styling.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p47', name: 'Nike Metcon', price: 3499, images: [getPlaceholderImage()], description: 'Durable Nike Metcon.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p48', name: 'Nike Air Max Plus', price: 3499, images: [getPlaceholderImage()], description: 'Striking Nike Air Max Plus.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p49', name: 'Jordan 3', price: 3799, images: [getPlaceholderImage()], description: 'Classic Jordan 3 design.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p50', name: 'Airmax 97', price: 3499, images: [getPlaceholderImage()], description: 'Iconic Airmax 97.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p51', name: 'Airmax 90', price: 3499, images: [getPlaceholderImage()], description: 'Classic Airmax 90.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p52', name: 'Mens Official Shoes', price: 3499, images: [getPlaceholderImage()], description: 'Sharp official footwear.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p53', name: 'ADIDAS Samoa', price: 2999, images: [getPlaceholderImage()], description: 'ADIDAS Samoa trainers.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p54', name: 'Adidas Samba', price: 2800, images: [getPlaceholderImage()], description: 'Legendary Adidas Samba.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p55', name: 'Nike Shox TL - White', price: 2499, images: [getPlaceholderImage()], description: 'White Nike Shox TL.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['White'] },
  { id: 'p56', name: 'Air Jordan 1 Mid', price: 3500, images: [getPlaceholderImage()], description: 'Versatile Jordan 1 Mid.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p57', name: 'Converse Chuck 70 Leather', price: 3800, images: [getPlaceholderImage()], description: 'Leather Chuck 70.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p58', name: 'Lacoste Men\'s Official', price: 999, images: [getPlaceholderImage()], description: 'Lacoste official shoes.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [], sizes: ['40-45'], colors: ['Multi'] },
  { id: 'p59', name: 'Nike Air Force 1 \'07', price: 2499, images: [getPlaceholderImage()], description: 'Classic AF1 07.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Multi'] },
  { id: 'p60', name: 'Tommy Hilfiger High Boots', price: 3499, images: [getPlaceholderImage()], description: 'Stylish Tommy Hilfiger boots.', category: 'ladies-shoes', subcategory: 'ladies-boots', relatedProducts: [], sizes: ['36-42'], colors: ['Multi'] },
  { id: 'p61', name: 'Nike Shox TL - Black', price: 3499, images: [getPlaceholderImage()], description: 'Black Nike Shox TL.', category: 'sneakers', subcategory: null, relatedProducts: [], sizes: ['36-45'], colors: ['Black'] },
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
