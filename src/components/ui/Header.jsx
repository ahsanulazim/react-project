import { Link, NavLink } from "react-router";
import Cart from "../shop/Cart";

export default function Header() {
  return (
    <header className="navbar bg-base-200 w-full">
      <div className="navbar-start">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <Link to="/">
          <div className="mx-2 flex-1 px-2">Logo</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Cart />
        <Link to="/login" className="ml-2">
          <button className="btn">Login</button>
        </Link>
      </div>
    </header>
  );
}
