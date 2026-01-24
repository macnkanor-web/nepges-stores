import { create } from "zustand";
import { supabase } from "@/integrations/supabase/client";
import { MockProduct } from "@/data/mockProducts";
import { Json } from "@/integrations/supabase/types";

interface WishlistItem {
  id: string;
  productHandle: string;
  productData: MockProduct;
  createdAt: string;
}

interface WishlistStore {
  items: WishlistItem[];
  isLoading: boolean;
  isAuthenticated: boolean;
  fetchWishlist: () => Promise<void>;
  addToWishlist: (product: MockProduct) => Promise<boolean>;
  removeFromWishlist: (productHandle: string) => Promise<boolean>;
  isInWishlist: (productHandle: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  isLoading: false,
  isAuthenticated: false,

  fetchWishlist: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      set({ items: [], isAuthenticated: false });
      return;
    }

    set({ isLoading: true, isAuthenticated: true });

    try {
      const { data, error } = await supabase
        .from("wishlists")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const items: WishlistItem[] = (data || []).map((item) => ({
        id: item.id,
        productHandle: item.product_handle,
        productData: item.product_data as unknown as MockProduct,
        createdAt: item.created_at ?? "",
      }));

      set({ items });
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  addToWishlist: async (product: MockProduct) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return false;
    }

    try {
      const { error } = await supabase.from("wishlists").insert([{
        user_id: user.id,
        product_handle: product.handle,
        product_data: JSON.parse(JSON.stringify(product)) as Json,
      }]);

      if (error) throw error;

      // Refetch to get the new item with its ID
      await get().fetchWishlist();
      return true;
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      return false;
    }
  },

  removeFromWishlist: async (productHandle: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return false;
    }

    try {
      const { error } = await supabase
        .from("wishlists")
        .delete()
        .eq("user_id", user.id)
        .eq("product_handle", productHandle);

      if (error) throw error;

      set((state) => ({
        items: state.items.filter((item) => item.productHandle !== productHandle),
      }));
      return true;
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      return false;
    }
  },

  isInWishlist: (productHandle: string) => {
    return get().items.some((item) => item.productHandle === productHandle);
  },

  clearWishlist: () => {
    set({ items: [], isAuthenticated: false });
  },
}));
