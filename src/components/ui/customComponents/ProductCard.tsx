import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { Product } from "@/features/typings";
import { AppDispatch } from "@/store/store";
import { addToCart } from "@/store/cartSlice";
import { formatPrice } from "@/utils/cartUtil";
import "./ProductCard.scss";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="product-card flex items-start gap-4 border-t py-4">
        <img
            src={product.image}
            alt={product.title}
            className="w-36 h-24 object-cover"
        />
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <h2 className="product-title md:text-3xl sm:text-xl font-bold tracking-wide uppercase">{product.title}</h2>
                <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
            </div>
            <p className="text-sm text-left">{product.description}</p>

            {product.status === "unavailable" && (
                <div className="unavailable-badge bg-white md:text-2xl sm:text-xl text-red-600 rounded">
                    UNAVAILABLE
                </div>
            )}

            {product.status === "available" && (
            <div className="mt-2 text-left">
                <Button className="bg-white hover:bg-blue-200 text-black cursor-pointer border border-gray-300" size="sm" onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                </Button>
            </div>
            )}
        </div>
    </div>
  );
};
