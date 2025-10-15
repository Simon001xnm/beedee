import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return image ? { url: image.imageUrl, hint: image.imageHint } : { url: 'https://picsum.photos/seed/placeholder/600/600', hint: 'placeholder' };
}

export const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', parentId: null, imageUrl: getImage('nike-shox-1').url, imageHint: getImage('nike-shox-1').hint },
];

export const products: Product[] = [
    {
        id: 'prod-nike-shox-tl',
        name: 'Nike Shox TL',
        price: 8500,
        images: [
            getImage('nike-shox-1'),
            getImage('nike-shox-2'),
            getImage('nike-shox-3')
        ],
        description: 'The Nike Shox TL brings mechanical cushioning to new heights. A recrafted version of the 2003 icon, it features breathable mesh in the upper and full-length Nike Shox technology for optimal impact absorption and a bold look on the streets.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
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
