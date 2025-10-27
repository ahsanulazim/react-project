import { useContext } from "react";
import { FaTrash } from "react-icons/fa6";
import { ProductContext } from "../../../context/MyContext";

export default function SideCart() {
  const { cartedProducts, removeFromCart, total } = useContext(ProductContext);

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-5"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        {cartedProducts.length > 0 ? (
          cartedProducts.map((product) => (
            <li key={product.id}>
              <div>
                <img
                  className="aspect-square object-contain size-10 p-1 bg-base-300 rounded-md"
                  src={product.image}
                  alt={product.title}
                />
                <div>
                  <h2 className="truncate font-bold max-w-44">
                    {product.title}
                  </h2>
                  <p>
                    {`$${product.price} × ${product.quantity} = $${
                      product.price * product.quantity
                    }`}
                  </p>
                </div>
                <button
                  className="btn btn-xs btn-error"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>Empty Cart</li>
        )}
        <li>Total = ${total}</li>
      </ul>
    </div>
  );
}
