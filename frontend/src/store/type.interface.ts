export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  created_at: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}
