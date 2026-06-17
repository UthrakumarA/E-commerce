import products from "../data/products";
import ProductCard from "../component/ProductCard";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome To ShopSphere</h1>

        <p>
          Find the best products at the best prices.
        </p>
      </section>

      <h2>Featured Products</h2>

      <div className="grid">
        {products.slice(0, 3).map((product) => (
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