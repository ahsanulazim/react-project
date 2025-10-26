import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Login from "./components/auth/Login";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;
