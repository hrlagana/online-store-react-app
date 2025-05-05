export type ProductStatus = "available" | "unavailable";

export type CartItem = {
    product: Product;
    quantity: number;
};
  
export type CartState = {
    items: CartItem[];
};

export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    status: ProductStatus;
}