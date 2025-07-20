import { create } from "zustand";
import { persist } from "zustand/middleware";
import useAuthStore from "./useAuthStore";

const useCartStore = create(
  persist((set) => ({
    cart: [],

    addToCart: (product) => {
      const { isAuthenticated } = useAuthStore.getState();
      if (isAuthenticated) {
        set((state) => ({ cart: [...state.cart, product] }));
      } else {
        // You could optionally do something else here, like show a "please login" message
        console.log("User must be logged in to add items.");
      }
    },

    clearCart: () => {
      const { logout } = useAuthStore.getState();
      set(() => ({ cart: [] }));
      logout();
    },
  })),
  { name: "cart-storage" }
);

export default useCartStore;
