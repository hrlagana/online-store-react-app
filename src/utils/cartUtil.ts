import { CartItem } from "@/features/typings";

export const calculateCartTotal = (cartItems: CartItem[]): number => {
    return cartItems.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
    );
};

export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};