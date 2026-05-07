import React from "react";
import { create } from "zustand";
import axios from "axios";
import type { ProductState } from "./type.interface";
import { toast } from "react-hot-toast";

// base url will be dynamic depending on the environment
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  currentProduct: null,

  // form data for add products
  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({ formData }),
  resetFormData: () => set({ formData: { name: "", price: "", image: "" } }),

  addProduct: async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    set({ loading: true });
    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetFormData();
      toast.success("Product added successfully.");
      (
        document.getElementById("add_product_modal") as HTMLDialogElement
      ).close();
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error("Failed to add product. Please try again.");
    } finally {
      set({ loading: false });
    }
  },

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

  deleteProduct: async (id: number) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      }));
      toast.success("Product deleted successfully.");
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product. Please try again.");
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id: number) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products/${id}`);
      set({
        currentProduct: response.data.data,
        formData: response.data.data,
        error: null,
      });
    } catch (error) {
      console.error("Failed to fetch product:", error);
      set({ currentProduct: null });
      toast.error("Failed to fetch product. Please try again.");
    } finally {
      set({ loading: false });
    }
  },

  updateProduct: async (id: number) => {
    set({ loading: true });
    try {
      const { formData } = get();
      const response = await axios.put(
        `${BASE_URL}/api/products/${id}`,
        formData,
      );
      set({ currentProduct: response.data.data });
      toast.success("Product updated successfully.");
    } catch (error) {
      console.error("Failed to update product:", error);
      toast.error("Failed to update product. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
}));
