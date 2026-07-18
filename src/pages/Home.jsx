import {  useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";
import Footer from "../pages/Footer";
import "../CSS/index.css";

function Home() {
const [recentProducts, setRecentProducts] = useState([]);
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  const scrollTo = location.state?.scrollTo;
  if (!scrollTo) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        const navbarHeight = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({top: elementPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });
  window.history.replaceState({}, document.title);

}, [location]);

useEffect(() => {
  
   const loadRecentProducts = () => {
   const recent =JSON.parse(localStorage.getItem("recentProducts")) || [];
   setRecentProducts(recent);
  };

  loadRecentProducts();

  window.addEventListener("focus", loadRecentProducts);

  return () => {
    window.removeEventListener("focus",loadRecentProducts);
  };
}, []);

return (
  <div id="home" >
    <section className="hero" style={{paddingTop:"5px"}}>
      <h1>Welcome To Our ShopSphere</h1>
      <p>Find the best products and Qulality Products at the best prices.</p>
    </section>

    <h2 style={{color:"#2AA1EC"}}>Suggestion Products:</h2><br />

    <div className="grid">
      {products.slice(0, 4).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

    <div id="recent-products"><br /><br />
    <h2  style={{ color: "#2AA1EC" }}> 👁 Recently Viewed:</h2> <br />
      
    {recentProducts.length > 0 ? (
    <div className="grid">
      {recentProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />))}
    </div>
    ) : (
    <div style={{textAlign: "center",padding: "40px 0",}}>
      <h3 style={{ color: "#ccc" }}> You haven't viewed any products yet. </h3>
    </div>
    )}</div>

    <div style={{textAlign: "center",marginTop: "50px",marginBottom: "50px",}}>
      <h2 style={{ color: "#2AA1EC" }}>Explore More Products</h2><br />
      <button className="details-btn"onClick={()=>{navigate("/Products")}}>
      Browse Products →
      </button>
    </div>
    <Footer />
   </div>
  );
}

export default Home;