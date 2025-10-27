import { useContext } from "react";
import { ProductContext } from "../../../context/MyContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="aspect-square object-contain p-5"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{product.title}</h2>
        <p className="truncate">{product.description}</p>
        <p className="font-bold text-lg text-red-600">${product.price}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
