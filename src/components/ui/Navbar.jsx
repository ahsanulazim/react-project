import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Navbar({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Header />
        {/* Page content here */}
        {children}
      </div>
      <Sidebar />
    </div>
  );
}
