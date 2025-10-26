import { FaTrash } from "react-icons/fa6";

export default function SideCart() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-5"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li>
          <div>
            <img
              className="aspect-square object-cover size-10 p-1 bg-base-300 rounded-md"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
              alt="Product Name"
            />
            <div>
              <h2 className="truncate max-w-44">
                Product Nameajgfohsadouihgsdophgsdopfghsdofhgsdohfghsdfhgo
              </h2>
              <p>Price</p>
            </div>
            <button className="btn btn-xs">
              <FaTrash />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
