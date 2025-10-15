import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return image ? { url: image.imageUrl, hint: image.imageHint } : { url: 'https://picsum.photos/seed/placeholder/600/600', hint: 'placeholder' };
}

export const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', parentId: null, imageUrl: getImage('jordan-1').url, imageHint: getImage('jordan-1').hint },
  { id: 'mens-shoes', name: 'Men\'s Shoes', parentId: null, imageUrl: getImage('lacoste-1').url, imageHint: getImage('lacoste-1').hint },
  { id: 'ladies-shoes', name: 'Ladies\' Shoes', parentId: null, imageUrl: getImage('tommy-boots-1').url, imageHint: getImage('tommy-boots-1').hint },
  { id: 'formal-shoes', name: 'Formal Shoes', parentId: 'mens-shoes', imageUrl: getImage('lacoste-1').url, imageHint: getImage('lacoste-1').hint },
  { id: 'boots', name: 'Boots', parentId: 'ladies-shoes', imageUrl: getImage('tommy-boots-1').url, imageHint: getImage('tommy-boots-1').hint },
];

export const products: Product[] = [
    {
        id: 'prod-nike-shox-tl-white',
        name: 'Nike Shox TL - White',
        price: 8500,
        images: [
            getImage('nike-shox-1'),
            getImage('nike-shox-2'),
            getImage('nike-shox-3')
        ],
        description: 'The Nike Shox TL brings mechanical cushioning to new heights. A recrafted version of the 2003 icon, it features breathable mesh in the upper and full-length Nike Shox technology for optimal impact absorption and a bold look on the streets.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-nike-shox-tl-black', 'prod-air-jordan-1']
    },
    {
        id: 'prod-air-jordan-1',
        name: 'Air Jordan 1 Mid',
        price: 12000,
        images: [
            getImage('jordan-1'),
            getImage('jordan-2'),
            getImage('jordan-3'),
            getImage('jordan-4'),
        ],
        description: 'The Air Jordan 1 Mid shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness. Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-nike-air-force-1', 'prod-converse-chuck-70']
    },
    {
        id: 'prod-converse-chuck-70',
        name: 'Converse Chuck 70 Leather',
        price: 9500,
        images: [
            getImage('converse-1'),
            getImage('converse-2'),
            getImage('converse-3'),
        ],
        description: 'By 1970, the Chuck had evolved to become the pinnacle of function and utility for sport, and was considered the best basketball sneaker ever. The Chuck 70 is built off of the original 1970s design, with premium materials and an extraordinary attention to detail.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-polo-ralph-lauren', 'prod-air-jordan-1']
    },
    {
        id: 'prod-lacoste-official',
        name: 'Lacoste Men\'s Official',
        price: 11000,
        images: [
            getImage('lacoste-1'),
            getImage('lacoste-2'),
            getImage('lacoste-3'),
        ],
        description: 'A sleek and sophisticated official shoe for the modern man. Crafted from premium leather, this Lacoste shoe offers both comfort and timeless style, perfect for formal occasions or elevating your everyday look.',
        category: 'mens-shoes',
        subcategory: 'formal-shoes',
        relatedProducts: []
    },
    {
        id: 'prod-nike-air-force-1',
        name: 'Nike Air Force 1 \'07',
        price: 10500,
        images: [
            getImage('nike-airforce-1'),
            getImage('nike-airforce-2'),
        ],
        description: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-air-jordan-1', 'prod-nike-shox-tl-white']
    },
    {
        id: 'prod-tommy-hilfiger-boots',
        name: 'Tommy Hilfiger High Boots',
        price: 15500,
        images: [
            getImage('tommy-boots-1'),
            getImage('tommy-boots-2'),
        ],
        description: 'Make a statement with these stunning high boots from Tommy Hilfiger. Combining classic design with modern flair, these boots are perfect for the fashion-forward woman. Ideal for both casual and dressy outfits.',
        category: 'ladies-shoes',
        subcategory: 'boots',
        relatedProducts: []
    },
    {
        id: 'prod-nike-shox-tl-black',
        name: 'Nike Shox TL - Black',
        price: 9000,
        images: [
            getImage('nike-shox-black')
        ],
        description: 'Experience the next level of cushioning with the Nike Shox TL in a sleek black colorway. Its iconic full-length Shox columns provide ultimate comfort and a standout look.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-nike-shox-tl-white']
    },
    {
        id: 'prod-polo-ralph-lauren',
        name: 'Polo Ralph Lauren Sneaker',
        price: 8800,
        images: [
            getImage('polo-sneaker')
        ],
        description: 'A classic sneaker from Polo Ralph Lauren that combines preppy style with athletic comfort. A versatile shoe for any casual occasion.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-converse-chuck-70']
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