import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

import "./ProductList.scss";
import { selectProductsItems } from "@/features/selectors";

export const ProductList = () => {

  const products = useSelector(selectProductsItems);

  return (
    <div className="max-w-2xl mx-auto border p-6 rounded-lg bg-white">
      <h1 className="fish-store-header text-5xl font-bold text-center mb-2 tracking-wide">
        FISH STORE
      </h1>
      <p className="fish-store-subHeader text-center text-orange-500 font-semibold mb-6 border-b pb-2 uppercase">
        Our Products List
      </p>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
