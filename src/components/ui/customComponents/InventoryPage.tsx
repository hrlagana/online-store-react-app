import { useSelector } from "react-redux";
import { selectProductsItems } from "@/features/selectors";
import { ProductForm } from "./ProductForm";
import { NewProductForm } from "./NewProductForm";
import "./InventoryPage.scss";

export const InventoryPage = () => {
  const products = useSelector(selectProductsItems);
  window.console.log('prod', products);

  return (
    <div className="p-4 gap-4">
      <h1 className="inventory-page-header text-xl font-bold uppercase">Inventory</h1>
      {products.map((product) => (
        <ProductForm key={product.id} product={product} />
      ))}
      <NewProductForm />
    </div>
  );
}