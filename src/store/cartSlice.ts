import { CartItem, CartState, Product } from "@/features/typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadFromLocalStorage = (): CartItem[] => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  };
  
const saveToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
};

const initialState: CartState = {
  items: loadFromLocalStorage(),
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<Product>) => {
        const product = action.payload;
  
        if (product.status === "unavailable") return;
  
        const existing = state.items.find(
          (item) => item.product.id === product.id
        );
  
        if (existing) {
          existing.quantity += 1;
        } else {
          state.items.push({ product, quantity: 1 });
        }
  
        saveToLocalStorage(state.items);
      },

      syncProductChanges: (state, action: PayloadAction<Product>) => {
        const updatedProduct = action.payload;
        const item = state.items.find((i) => i.product.id === updatedProduct.id);
        if (item) {
          item.product = updatedProduct;
        }
  
        state.items = state.items.filter((i) => i.product.status === "available");
        saveToLocalStorage(state.items);
      },

    },
});
  
  export const { addToCart, syncProductChanges } = cartSlice.actions;
  export default cartSlice.reducer;