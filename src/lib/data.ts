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
  { id: 'kids-shoes', name: 'Kids\' Shoes', parentId: null, imageUrl: getImage('kids-sneaker-1').url, imageHint: getImage('kids-sneaker-1').hint },
  { id: 'formal-shoes', name: 'Formal Shoes', parentId: 'mens-shoes', imageUrl: getImage('lacoste-1').url, imageHint: getImage('lacoste-1').hint },
  { id: 'ladies-boots', name: 'Boots', parentId: 'ladies-shoes', imageUrl: getImage('tommy-boots-1').url, imageHint: getImage('tommy-boots-1').hint },
];

export const products: Product[] = [
    {
        id: 'prod-fashion-bunny',
        name: 'Fashion bunny',
        price: 1499,
        images: [
            getImage('fashion-bunny-1'),
            getImage('fashion-bunny-2'),
            getImage('fashion-bunny-3'),
        ],
        description: 'Cute and stylish Fashion bunny shoes for kids. Available in sizes 26-30.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-kids-airforce-1',
        name: 'Airforce 1 (Kids)',
        price: 1799,
        images: [
            getImage('kids-airforce-1-1'),
            getImage('kids-airforce-1-2'),
        ],
        description: 'Stylish and comfortable Airforce 1 for kids. Available in sizes 26-35.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-kids-sneakers-3',
        name: 'Kids Sneakers',
        price: 1499,
        images: [
            getImage('kids-sneaker-v3-1'),
            getImage('kids-sneaker-v3-2'),
            getImage('kids-sneaker-v3-3'),
        ],
        description: 'Stylish and comfortable sneakers for kids. Available in sizes 23-27.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-kids-sneakers-2',
        name: 'Kids Sneakers',
        price: 1799,
        images: [
            getImage('kids-sneaker-v2-1'),
            getImage('kids-sneaker-v2-2'),
            getImage('kids-sneaker-v2-3'),
            getImage('kids-sneaker-v2-4'),
        ],
        description: 'Stylish and comfortable sneakers for kids. Available in sizes 26-37.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-kids-sneakers',
        name: 'Kids Sneakers',
        price: 1799,
        images: [
            getImage('kids-sneaker-1'),
            getImage('kids-sneaker-2'),
            getImage('kids-sneaker-3'),
            getImage('kids-sneaker-4'),
        ],
        description: 'Stylish and comfortable sneakers for kids. Available in sizes 27-36.',
        category: 'kids-shoes',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-tn-airmax-plus',
        name: 'Tn Air Max Plus',
        price: 3499,
        images: [
            getImage('tn-airmax-plus-1'),
            getImage('tn-airmax-plus-2'),
            getImage('tn-airmax-plus-3'),
            getImage('tn-airmax-plus-4'),
            getImage('tn-airmax-plus-5'),
        ],
        description: 'A striking and comfortable Tn Air Max Plus sneaker, featuring tuned Air for premium stability and cushioning. Available in sizes 40-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-nike-metcon',
        name: 'Nike Metcon',
        price: 3499,
        images: [
            getImage('nike-metcon-1'),
            getImage('nike-metcon-2'),
            getImage('nike-metcon-3'),
        ],
        description: 'A durable and stable training shoe, the Nike Metcon is built for your toughest workouts. Available in sizes 37-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-nike-airmax-plus',
        name: 'Nike Air Max Plus',
        price: 3799,
        images: [
            getImage('nike-airmax-plus-1'),
            getImage('nike-airmax-plus-2'),
            getImage('nike-airmax-plus-3'),
            getImage('nike-airmax-plus-4'),
            getImage('nike-airmax-plus-5'),
        ],
        description: 'A stylish and comfortable Nike Air Max Plus sneaker. Available in sizes 40-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-jordan-3',
        name: 'Jordan 3',
        price: 3499,
        images: [
            getImage('jordan-3-1'),
            getImage('jordan-3-2'),
            getImage('jordan-3-3'),
            getImage('jordan-3-4'),
            getImage('jordan-3-5'),
            getImage('jordan-3-6'),
            getImage('jordan-3-7'),
            getImage('jordan-3-8'),
            getImage('jordan-3-9'),
        ],
        description: 'A classic Jordan 3 sneaker. Available in sizes 36-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-airmax-97',
        name: 'Airmax 97',
        price: 3499,
        images: [
            getImage('airmax-97-1'),
            getImage('airmax-97-2'),
            getImage('airmax-97-3'),
            getImage('airmax-97-4'),
            getImage('airmax-97-5'),
        ],
        description: 'A stylish and comfortable Airmax 97. Available in sizes 36-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-airmax-90',
        name: 'Airmax 90',
        price: 3499,
        images: [
            getImage('airmax-90-1'),
            getImage('airmax-90-2'),
            getImage('airmax-90-3'),
            getImage('airmax-90-4'),
            getImage('airmax-90-5'),
            getImage('airmax-90-6'),
            getImage('airmax-90-7'),
            getImage('airmax-90-8'),
            getImage('airmax-90-9'),
            getImage('airmax-90-10'),
            getImage('airmax-90-11'),
            getImage('airmax-90-12'),
        ],
        description: 'A stylish and comfortable Airmax 90. Available in sizes 36-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-mens-official',
        name: 'Mens Official Shoes',
        price: 2999,
        images: [
            getImage('mens-official-1'),
            getImage('mens-official-2'),
            getImage('mens-official-3'),
            getImage('mens-official-4'),
            getImage('mens-official-5'),
            getImage('mens-official-6'),
            getImage('mens-official-7'),
            getImage('mens-official-8'),
            getImage('mens-official-9'),
            getImage('mens-official-10'),
        ],
        description: 'A sleek and sophisticated official shoe for the modern man. Crafted from premium leather, this shoe offers both comfort and timeless style, perfect for formal occasions or elevating your everyday look. Available in sizes 39-45.',
        category: 'mens-shoes',
        subcategory: 'formal-shoes',
        relatedProducts: []
    },
    {
        id: 'prod-timberland-casual',
        name: 'TimberLand Casual',
        price: 2800,
        images: [
            getImage('timberland-1'),
            getImage('timberland-2'),
            getImage('timberland-3'),
            getImage('timberland-4'),
            getImage('timberland-5'),
        ],
        description: 'A stylish and durable casual shoe from Timberland, perfect for everyday wear. Available in sizes 40-45.',
        category: 'mens-shoes',
        subcategory: null,
        relatedProducts: []
    },
    {
        id: 'prod-adidas-samoa',
        name: 'ADIDAS Samoa',
        price: 2800,
        images: [
            getImage('samoa-1'),
            getImage('samoa-2'),
            getImage('samoa-3'),
            getImage('samoa-4'),
            getImage('samoa-5'),
            getImage('samoa-6'),
            getImage('samoa-7'),
            getImage('samoa-8'),
            getImage('samoa-9'),
        ],
        description: 'A classic from the archives, the Adidas Samoa is a timeless trainer loved for its sleek silhouette and iconic toe bumper. Available in sizes 40-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-nike-shox-tl-white', 'prod-air-jordan-1']
    },
    {
        id: 'prod-adidas-samba',
        name: 'Adidas Samba',
        price: 2499,
        images: [
            getImage('samba-1'),
            getImage('samba-2'),
            getImage('samba-3'),
            getImage('samba-4'),
            getImage('samba-5'),
        ],
        description: 'A true icon, the Adidas Samba is a legendary indoor football shoe that has become a streetwear staple. Its timeless design features a leather upper and suede overlays. Available in sizes 36-45.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-adidas-samoa', 'prod-converse-chuck-70']
    },
    {
        id: 'prod-nike-shox-tl-white',
        name: 'Nike Shox TL - White',
        price: 3500,
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
        price: 3800,
        images: [
            getImage('jordan-1'),
            getImage('jordan-2'),
            getImage('jordan-3-image'),
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
        price: 999,
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
        price: 3999,
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
        price: 3600,
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
        price: 3900,
        images: [
            getImage('tommy-boots-1'),
            getImage('tommy-boots-2'),
        ],
        description: 'Make a statement with these stunning high boots from Tommy Hilfiger. Combining classic design with modern flair, these boots are perfect for the fashion-forward woman. Ideal for both casual and dressy outfits.',
        category: 'ladies-shoes',
        subcategory: 'ladies-boots',
        relatedProducts: []
    },
    {
        id: 'prod-nike-shox-tl-black',
        name: 'Nike Shox TL - Black',
        price: 3500,
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
        price: 3200,
        images: [
            getImage('polo-sneaker')
        ],
        description: 'A classic sneaker from Polo Ralph Lauren that combines preppy style with athletic comfort. A versatile shoe for any casual occasion.',
        category: 'sneakers',
        subcategory: null,
        relatedProducts: ['prod-converse-chuck-70']
    },
    { id: 'new-prod-1', name: 'Product 1', price: 1500, images: [getImage('new-image-1')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-2', name: 'Product 2', price: 1800, images: [getImage('new-image-2')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-3', name: 'Product 3', price: 2200, images: [getImage('new-image-3')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-4', name: 'Product 4', price: 1300, images: [getImage('new-image-4')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-5', name: 'Product 5', price: 2500, images: [getImage('new-image-5')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-6', name: 'Product 6', price: 2800, images: [getImage('new-image-6')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-7', name: 'Product 7', price: 1900, images: [getImage('new-image-7')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-8', name: 'Product 8', price: 3100, images: [getImage('new-image-8')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-9', name: 'Product 9', price: 1600, images: [getImage('new-image-9')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-10', name: 'Product 10', price: 3300, images: [getImage('new-image-10')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-11', name: 'Product 11', price: 1200, images: [getImage('new-image-11')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-12', name: 'Product 12', price: 2100, images: [getImage('new-image-12')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-13', name: 'Product 13', price: 2400, images: [getImage('new-image-13')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-14', name: 'Product 14', price: 2700, images: [getImage('new-image-14')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-15', name: 'Product 15', price: 3000, images: [getImage('new-image-15')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-16', name: 'Product 16', price: 1400, images: [getImage('new-image-16')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-17', name: 'Product 17', price: 3400, images: [getImage('new-image-17')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-18', name: 'Product 18', price: 1700, images: [getImage('new-image-18')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-19', name: 'Product 19', price: 2900, images: [getImage('new-image-19')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-20', name: 'Product 20', price: 2300, images: [getImage('new-image-20')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-21', name: 'Product 21', price: 1100, images: [getImage('new-image-21')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-22', name: 'Product 22', price: 3200, images: [getImage('new-image-22')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-23', name: 'Product 23', price: 2000, images: [getImage('new-image-23')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-24', name: 'Product 24', price: 2600, images: [getImage('new-image-24')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-25', name: 'Product 25', price: 1000, images: [getImage('new-image-25')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-26', name: 'Product 26', price: 3500, images: [getImage('new-image-26')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-27', name: 'Product 27', price: 1500, images: [getImage('new-image-27')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-28', name: 'Product 28', price: 1800, images: [getImage('new-image-28')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-29', name: 'Product 29', price: 2200, images: [getImage('new-image-29')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-30', name: 'Product 30', price: 1300, images: [getImage('new-image-30')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-31', name: 'Product 31', price: 2500, images: [getImage('new-image-31')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-32', name: 'Product 32', price: 2800, images: [getImage('new-image-32')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-33', name: 'Product 33', price: 1900, images: [getImage('new-image-33')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-34', name: 'Product 34', price: 3100, images: [getImage('new-image-34')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-35', name: 'Product 35', price: 1600, images: [getImage('new-image-35')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-36', name: 'Product 36', price: 3300, images: [getImage('new-image-36')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-37', name: 'Product 37', price: 1200, images: [getImage('new-image-37')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-38', name: 'Product 38', price: 2100, images: [getImage('new-image-38')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-39', name: 'Product 39', price: 2400, images: [getImage('new-image-39')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-40', name: 'Product 40', price: 2700, images: [getImage('new-image-40')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-41', name: 'Product 41', price: 3000, images: [getImage('new-image-41')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-42', name: 'Product 42', price: 1400, images: [getImage('new-image-42')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-43', name: 'Product 43', price: 3400, images: [getImage('new-image-43')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-44', name: 'Product 44', price: 1700, images: [getImage('new-image-44')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-45', name: 'Product 45', price: 2900, images: [getImage('new-image-45')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-46', name: 'Product 46', price: 2300, images: [getImage('new-image-46')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-47', name: 'Product 47', price: 1100, images: [getImage('new-image-47')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-48', name: 'Product 48', price: 1800, images: [getImage('new-image-48')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-49', name: 'Product 49', price: 1800, images: [getImage('new-image-49')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-50', name: 'Product 50', price: 1800, images: [getImage('new-image-50')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-51', name: 'Product 51', price: 1800, images: [getImage('new-image-51')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-52', name: 'Product 52', price: 1800, images: [getImage('new-image-52')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-53', name: 'Product 53', price: 1800, images: [getImage('new-image-53')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-54', name: 'Product 54', price: 1800, images: [getImage('new-image-54')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-55', name: 'Product 55', price: 1800, images: [getImage('new-image-55')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-56', name: 'Product 56', price: 1800, images: [getImage('new-image-56')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-57', name: 'Product 57', price: 1800, images: [getImage('new-image-57')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-58', name: 'Product 58', price: 1800, images: [getImage('new-image-58')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'sneakers', subcategory: null, relatedProducts: [] },
    { id: 'new-prod-59', name: 'Product 59', price: 3200, images: [getImage('new-image-59')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-60', name: 'Product 60', price: 3200, images: [getImage('new-image-60')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-61', name: 'Product 61', price: 3200, images: [getImage('new-image-61')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-62', name: 'Product 62', price: 3200, images: [getImage('new-image-62')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-63', name: 'Product 63', price: 3200, images: [getImage('new-image-63')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-64', name: 'Product 64', price: 3200, images: [getImage('new-image-64')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-65', name: 'Product 65', price: 3200, images: [getImage('new-image-65')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-66', name: 'Product 66', price: 3200, images: [getImage('new-image-66')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-67', name: 'Product 67', price: 3200, images: [getImage('new-image-67')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-68', name: 'Product 68', price: 3200, images: [getImage('new-image-68')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-69', name: 'Product 69', price: 3200, images: [getImage('new-image-69')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-70', name: 'Product 70', price: 3200, images: [getImage('new-image-70')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-71', name: 'Product 71', price: 3200, images: [getImage('new-image-71')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-72', name: 'Product 72', price: 3200, images: [getImage('new-image-72')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-73', name: 'Product 73', price: 3200, images: [getImage('new-image-73')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] },
    { id: 'new-prod-74', name: 'Product 74', price: 3200, images: [getImage('new-image-74')], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'mens-shoes', subcategory: 'formal-shoes', relatedProducts: [] }
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

    

    
