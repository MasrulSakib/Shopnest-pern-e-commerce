import React from "react";
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
  deleteProduct: (id: number) => Promise<void>;
  formData: {
    name: string;
    price: string;
    image: string;
  };
  setFormData: (formData: {
    name: string;
    price: string;
    image: string;
  }) => void;

  resetFormData: () => void;
  addProduct: (e: React.SubmitEvent<HTMLFormElement>) => Promise<void>;

  currentProduct: Product | null;
  fetchProduct: (id: number) => Promise<void>;
  updateProduct: (id: number) => Promise<void>;
}

export interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}
