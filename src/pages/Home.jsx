import products from "../data/products";
import ProductCard from "../component/ProductCard";
import { useEffect, useState } from "react";
import "../CSS/index.css";

function Home() {
const [recentProducts, setRecentProducts] = useState([]);

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
  <div>
    <center><u style={{color:"#2AA1EC"}}><b><h1 className="logo" style={{color:"#2AA1EC"}}>
        Welcome To Vicky Anna E-Commerce Website</h1></b></u></center><br />
    <section className="hero">
      <h1>Welcome To ShopSphere</h1>
      <p>Find the best products at the best prices.</p>
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

    <h2 style={{ color: "#2AA1EC", marginTop: "50px" }}> 👁 Recently Viewed</h2><br />
      
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
    </div>)}

    <div style={{textAlign: "center",marginTop: "50px",marginBottom: "50px",}}>
      <h2 style={{ color: "#2AA1EC" }}>Explore More Products</h2><br />
      <button className="details-btn"onClick={() => window.location.href="/products"}>
      Browse Products →
      </button>
    </div>

  </div>
  );
}

export default Home;