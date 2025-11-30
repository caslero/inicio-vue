// import { defineStore } from "pinia";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     items: [] as Array<{ id: number; name: string; quantity: number; price: number }>,
//   }),
//   getters: {
//     itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
//     totalPrice: (state) => state.items.reduce((total, item) => total + item.quantity * item.price, 0),
//   },
//   actions: {
//     addItem(item: { id: number; name: string; price: number }) {
//       const existingItem = this.items.find((i) => i.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         this.items.push({ ...item, quantity: 1 });
//       }
//     },
//     removeItem(itemId: number) {
//       this.items = this.items.filter((item) => item.id !== itemId);
//     },
//     clearCart() {
//       this.items = [];
//     },
//   },
// });
import { defineStore } from "pinia";
import type { CartItem } from "@/store/interfaces/interfaceCart";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    total: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    // 💡 NUEVO GETTER: Suma la cantidad total de artículos.
    cartItemsCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
  },
  actions: {
    addItem(item: CartItem) {
      const existing = this.items.find((i) => i.id === item.id);
      const quantityToAdd = item.quantity > 0 ? item.quantity : 1;

      if (existing) {
        existing.quantity += quantityToAdd;
      } else {
        this.items.push({ ...item, quantity: quantityToAdd });
      }
    },
    removeItem(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    clearCart() {
      this.items = [];
    },
  },
});
