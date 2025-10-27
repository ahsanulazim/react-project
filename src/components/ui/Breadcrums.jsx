import { Link } from "react-router";

export default function Breadcrums({ path }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{path}</li>
      </ul>
    </div>
  );
}
