import { useParams } from "react-router";
import ScrollToTop from "../ui/ScrollToTop";
import { useContext } from "react";
import { ProductContext } from "../../../context/MyContext";
import PurchaseBtn from "./PurchaseBtn";

export default function Product() {
  let { productId } = useParams();
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <div className="text-center py-20">Loading product data...</div>;
  }

  const product = products.find((p) => p.id === Number(productId));

  return (
    <>
      <ScrollToTop />
      <div className="hero bg-base-200 min-h-screen">
        {product ? (
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product?.image}
              className="max-w-sm rounded-lg"
              alt={product?.title}
            />
            <div>
              <h1 className="text-5xl font-bold">{product?.title}</h1>
              <p className="py-6">{product?.description}</p>
              <p>${product?.price}</p>
              <PurchaseBtn pid={product?.id} />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">Not Found</div>
        )}
      </div>
    </>
  );
}
