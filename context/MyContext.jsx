import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function MyContext({ children }) {
  const [products, setProducts] = useState(null);
  const [cartedProducts, setCartedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch all products once
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart
  const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setCartedProducts((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        // quantity বাড়াও
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // নতুন প্রোডাক্ট quantity = 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const data = {
    products,
    addToCart,
    cartedProducts,
    removeFromCart,
  };

  return <ProductContext value={data}>{children}</ProductContext>;
}
