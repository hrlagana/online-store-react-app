import { RootState } from "../store/store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectProductsItems = (state: RootState) => state.products.items;