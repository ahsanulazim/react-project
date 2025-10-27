import { useContext } from "react";
import { ProductContext } from "../../../context/MyContext";

export default function PurchaseBtn({ pid }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <button className="btn btn-primary" onClick={() => addToCart(pid)}>
      Buy Now
    </button>
  );
}
