import { CartItem } from "@/features/typings";

export const calculateCartTotal = (cartItems: CartItem[]): number => {
    return cartItems
        .filter((item) => item.product.status === "available")
        .reduce((total, item) => total + item.product.price * item.quantity, 0);
};

export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};

export const createUniqueID = () => {
    return Date.now().toString()
}