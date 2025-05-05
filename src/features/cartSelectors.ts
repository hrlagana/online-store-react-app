import { RootState } from "./../store/store";

export const selectCartItems = (state: RootState) => state.cart.items;
