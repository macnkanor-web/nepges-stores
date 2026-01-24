import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MockProduct } from "@/data/mockProducts";

interface RecentlyViewedStore {
  items: MockProduct[];
  addProduct: (product: MockProduct) => void;
  clearHistory: () => void;
}

const MAX_ITEMS = 10;

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],

      addProduct: (product: MockProduct) => {
        const { items } = get();
        
        // Remove if already exists (to move to front)
        const filtered = items.filter((item) => item.handle !== product.handle);
        
        // Add to front and limit to MAX_ITEMS
        const updated = [product, ...filtered].slice(0, MAX_ITEMS);
        
        set({ items: updated });
      },

      clearHistory: () => {
        set({ items: [] });
      },
    }),
    {
      name: "recently-viewed",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
