import { Link } from "react-router";
import Breadcrums from "../ui/Breadcrums";
import Section from "../ui/Section";
import { ProductContext } from "../../../context/MyContext";
import { useContext } from "react";
import Invoice from "./Invoice";

export default function Checkout() {
  const { cartedProducts, total } = useContext(ProductContext);

  return (
    <Section>
      <Breadcrums path="Checkout" />
      {/* <img
        src="/empty-cart.svg"
        alt="empty cart"
        className="max-w-80 mx-auto"
      />
      <div className="text-center">
        <h2 className="mb-5">Shopping Cart is Empty!</h2>
        <Link to="/shop">
          <button className="btn btn-primary">Start Shopping</button>
        </Link>
      </div> */}
      <div className="bg-base-100 p-4 rounded-md">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Invoice />
        <div>
          <span>Total: </span>
          <span>{total}</span>
        </div>
      </div>
    </Section>
  );
}
