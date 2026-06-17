import products from "../data/products";
import ProductCard from "../component/ProductCard";

const Products= ()=>
{
  return (
    <div className="products-page">
      <h1>All Products</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;