import { CartItem, CartState, Product } from "@/features/typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
};

const loadFromLocalStorage = (): CartItem[] => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;