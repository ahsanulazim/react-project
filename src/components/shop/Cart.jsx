import { FaBasketShopping } from "react-icons/fa6";
import SideCart from "./SideCart";

export default function Cart() {
  return (
    <div className="drawer drawer-end justify-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-5" className="drawer-button btn">
          <FaBasketShopping />
        </label>
      </div>
      <SideCart />
    </div>
  );
}
