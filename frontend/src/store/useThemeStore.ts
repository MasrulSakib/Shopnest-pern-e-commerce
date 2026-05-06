import { create } from "zustand";
import type { ThemeState } from "./type.interface";

export const useThemeStore = create<ThemeState>((set) => ({
  theme: localStorage.getItem("preferred-theme") || "forest", // Default theme
  setTheme: (theme: string) => {
    localStorage.setItem("preferred-theme", theme);
    set({ theme });
  },
}));
