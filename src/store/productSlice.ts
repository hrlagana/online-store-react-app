// src/features/products/productsSlice.ts
import { Product } from "@/features/typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  items: Product[];
}

const loadProductsFromLocalStorage = (): Product[] => {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
};

const saveProductsToLocalStorage = (products: Product[]) => {
    localStorage.setItem("products", JSON.stringify(products));
};

const initialState: ProductsState = {
  items: loadProductsFromLocalStorage(),
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      setProducts: (state, action: PayloadAction<Product[]>) => {
        state.items = action.payload;
        saveProductsToLocalStorage(state.items);
      },
      addProduct: (state, action: PayloadAction<Product>) => {
        state.items.push(action.payload);
        saveProductsToLocalStorage(state.items);
      },
      updateProduct: (state, action: PayloadAction<Product>) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
          saveProductsToLocalStorage(state.items);
        }
      },
      deleteProduct: (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
        saveProductsToLocalStorage(state.items);
      },
    },
});
  
export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
