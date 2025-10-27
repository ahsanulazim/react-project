import { useContext } from "react";
import Breadcrums from "../ui/Breadcrums";
import Section from "../ui/Section";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../../context/MyContext";

export default function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <Section>
      <Breadcrums path="Shop" />
      <h1 className="text-center font-bold text-4xl uppercase mb-8">My Shop</h1>
      {products ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="text-xl">
            <span className="loading loading-spinner loading-xl"></span> Loading
            Products
          </span>
        </div>
      )}
    </Section>
  );
}
