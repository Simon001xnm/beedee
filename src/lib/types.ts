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
}
