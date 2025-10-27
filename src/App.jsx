import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Login from "./components/auth/Login";
import Shop from "./components/shop/Shop";
import Checkout from "./components/shop/Checkout";
import Product from "./components/shop/Product";

function App() {
  return (
    <>
      <Navbar>
        <main className="bg-base-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shop/:productId" element={<Product />} />
          </Routes>
        </main>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;
