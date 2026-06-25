import products from "../data/products";
import ProductCard from "../component/ProductCard";
import "../CSS/index.css";

function Home() {
  return (
    <div>
      <center><u style={{color:"#2AA1EC"}}><b><h1 className="logo" style={{color:"#2AA1EC"}}>
          Welcome To Vicky Anna E-Commerce Website</h1></b></u></center><br />
      <section className="hero">
        <h1>Welcome To ShopSphere</h1>

        <p>
          Find the best products at the best prices.
        </p>
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
    </div>
  );
}

export default Home;