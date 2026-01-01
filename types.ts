
export type GrindOption = 'Whole Bean' | 'Phin' | 'Machine' | 'Pour Over' | 'Cold Brew';

export interface TasteNotes {
  bitterness: number;
  acidity: number;
  sweetness: number;
  aroma: number;
  body: number;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceBase: number; // For 250g
  image: string;
  origin: string;
  altitude: string;
  processing: string;
  roastDate: string;
  tasteNotes: TasteNotes;
  weights: number[]; // e.g. [250, 500, 1000]
}

export interface CartItem {
  product: Product;
  weight: number;
  grind: GrindOption;
  quantity: number;
  totalPrice: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}
