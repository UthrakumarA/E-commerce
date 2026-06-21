import {Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products";
import CartList from "./pages/CartList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import ProductDetails from "./pages/ProductDetails";
import './index.css';
import { useCart } from "./context/Cardcontext";

const Navbar=()=> {
  const {cartCount}=useCart();
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div className="nav-links">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/products")}>Products</span>
        <span onClick={() => navigate("/cart")}>Cart List ({cartCount})</span>
        <span onClick={() => navigate("/about")}>About</span>
        <span onClick={() => navigate("/contact")}>Contact</span>
        <span onClick={() => navigate("/help")}>Help</span>
      </div>

    </nav>
  );
}

const AppRouter=()=> {
  return (
    <>
      <center><u><b><h1 className="logo">Welcome To Vicky Anna E-Commerce Website</h1></b></u></center>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products"element={<Products />}/>
        <Route path="/cart" element={<CartList />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/products/:id"element={<ProductDetails />}/>
      </Routes>
    </>
  );
}

export default AppRouter;