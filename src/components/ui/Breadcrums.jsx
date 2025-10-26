import { Link } from "react-router";

export default function Breadcrums() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shop</li>
      </ul>
    </div>
  );
}
