import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPriceQuantity = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="bg-gray-800 px-4 py-4 text-stone-200 
      uppercase md:text-base text-small sm:px-6 flex items-center justify-between"
    >
      <p className="text-stone-200 font-semibold space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPriceQuantity}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
