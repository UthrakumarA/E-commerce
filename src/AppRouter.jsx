import {Routes, Route, useLocation} from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "./component/PageLoader";
const Navbar = lazy(() => import("./component/Navbar"));  
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import( "./pages/Register"));
const Home = lazy(() => import( "./pages/Home"));
const Products = lazy(() => import( "./pages/Products"));
const CartList = lazy(() => import( "./pages/CartList"));
const Orders = lazy(() => import( "./pages/Orders"));
const ProductDetails = lazy(() => import( "./component/ProductDetails"));
const ScrollToTop = lazy(() => import( "./component/ScrollToTop"));
const ProtectedRoute = lazy(() => import( "./component/ProtectedRoute"));
const MyProfile = lazy(() => import( "./pages/Myprofile"));
const Wishlist = lazy(() => import( "./pages/Wishlist"));
const CustomerSupport = lazy(() => import( "./help-support/CustomerSupport"));
const NotFound = lazy(() => import( "./pages/NotFound"));
import './CSS/index.css';
 

const AppRouter = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
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
        <Route path="/*" element={<ProtectedRoute> <NotFound /> </ProtectedRoute>} />
      </Routes>
      </Suspense>
    </>
  );
}

export default AppRouter;