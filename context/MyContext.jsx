import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function MyContext({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [products]);

  const data = {
    products,
  };

  return <ProductContext value={data}>{children}</ProductContext>;
}
