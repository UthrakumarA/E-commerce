import {Routes, Route, useLocation} from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartList from "./pages/CartList";
import Orders from "./pages/Orders";
import ProductDetails from "./component/ProductDetails";
import ScrollToTop from "./component/ScrollToTop";
import ProtectedRoute from "./component/ProtectedRoute";
import MyProfile from "./pages/Myprofile";
import Wishlist from "./pages/Wishlist";
import CustomerSupport from "./component/CustomerSupport";
import './CSS/index.css';
 

const AppRouter = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={ <Login />}/>
        <Route path="/register" element={ <Register />}/>
        <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path="/Products"element={<ProtectedRoute> <Products /> </ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute> <CartList /> </ProtectedRoute>}/>
        <Route path="/products/:id"element={<ProtectedRoute> <ProductDetails /> </ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute> <MyProfile /> </ProtectedRoute>}/>
        <Route path="/wishlist" element={<ProtectedRoute> <Wishlist/> </ProtectedRoute>}/>
        <Route path="/orders" element={<ProtectedRoute> <Orders/> </ProtectedRoute>}/>
        <Route path="/customer-support" element={<ProtectedRoute> <CustomerSupport/> </ProtectedRoute>}/>
      </Routes>
    </>
  );
}

export default AppRouter;