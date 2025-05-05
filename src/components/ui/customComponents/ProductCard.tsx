import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDispatch } from "react-redux";
import { Product } from "@/features/typings";
import { AppDispatch } from "@/store/store";
import { addToCart } from "@/store/cartSlice";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-start gap-4 border-t py-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-28 h-20 object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold tracking-wide uppercase">{product.title}</h2>
          <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm">{product.description}</p>

        <div className="mt-2 text-left">
          {product.status === "unavailable" ? (
            <Badge variant="destructive" className="uppercase">Unavailable</Badge>
          ) : (
            <Button
              size="sm"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
