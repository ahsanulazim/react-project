import { Link } from "react-router";
import PurchaseBtn from "./PurchaseBtn";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <Link to={`/shop/${product.id}`}>
        <figure>
          <img
            className="aspect-square object-contain p-5"
            src={product.image}
            alt={product.title}
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/shop/${product.id}`}>
          <h2 className="card-title text-sm hover:link">{product.title}</h2>
          <p className="truncate">{product.description}</p>
        </Link>
        <p className="font-bold text-lg text-red-600">${product.price}</p>
        <div className="card-actions">
          <PurchaseBtn pid={product.id} />
        </div>
      </div>
    </div>
  );
}
