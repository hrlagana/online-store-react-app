import { useSelector } from "react-redux";
import { selectCartItems } from "@/features/selectors";
import { calculateCartTotal, formatPrice } from "@/utils/utils";

import "./ShoppingCart.scss";


export const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = calculateCartTotal(cartItems);

  return (
    <div className="w-full bg-white border p-6 rounded-lg">
      <h2 className="shopping-cart-header text-xl font-bold tracking-wide mb-4 text-center uppercase">
        Shopping Cart
      </h2>

      {cartItems.map((item) => (
        <div key={item.product.id} className="flex justify-between text-sm p-2 mb-2 border-b-1 border-b-gray-400">
          <span>
            {item.quantity} x {item.product.title}
          </span>
          <span>
            {formatPrice(item.quantity * item.product.price)}
          </span>
        </div>
      ))}

      <hr className="my-4" color="black"/>
      <div className="flex justify-between font-bold">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};
