import { create } from "zustand";
import axios from "axios";
import type { ProductState } from "./type.interface";

const BASE_URL = "http://localhost:3001";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data, error: null });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 429) {
        set({ error: "Rate limit exceeded.", products: [] });
      } else {
        set({ error: "Failed to fetch products.", products: [] });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
