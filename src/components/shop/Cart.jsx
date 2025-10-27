import { FaBasketShopping } from "react-icons/fa6";
import SideCart from "./SideCart";
import { useContext } from "react";
import { ProductContext } from "../../../context/MyContext";

export default function Cart() {
  const { totalQuantity } = useContext(ProductContext);

  return (
    <div className="drawer drawer-end justify-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-5" className="drawer-button btn indicator">
          <span className="indicator-item badge badge-secondary">
            {totalQuantity}
          </span>
          <FaBasketShopping />
        </label>
      </div>
      <SideCart />
    </div>
  );
}
