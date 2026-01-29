
export interface Category {
  id: string;
  name: string;
  parentId: string | null;
  imageUrl: string;
  imageHint: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: { url: string, hint: string }[];
  description: string;
  category: string;
  subcategory: string | null;
  relatedProducts: string[];
  sizes: string[];
  colors: string[];
}

export interface CartItem extends Product {
  cartItemId: string; // Unique identifier for this specific variant in the cart
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
