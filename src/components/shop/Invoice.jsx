import { useContext } from "react";
import { ProductContext } from "../../../context/MyContext";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router";

export default function Invoice() {
  const { cartedProducts, removeFromCart, addToCart, updateQuantity } =
    useContext(ProductContext);

  return (
    <div className="overflow-x-auto my-5">
      <table className="table">
        {/* head */}
        <thead className="bg-base-300">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartedProducts.map((product) => (
            <tr className="hover:bg-base-300" key={product.id}>
              <td>
                <Link to="#" className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle size-12">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold hover:link">{product.title}</div>
                  </div>
                </Link>
              </td>
              <td>
                <input
                  type="number"
                  className="input max-w-12"
                  min="1"
                  value={product.quantity}
                  onChange={(e) => updateQuantity(product.id, e.target.value)}
                />
                <button
                  className="btn btn-error ms-3"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaTrash />
                </button>
              </td>
              <td>{product.price}</td>
              <td>{(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
