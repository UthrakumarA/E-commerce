import { useParams } from "react-router-dom";
import { useEffect } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "./Cardcontext";
import "../CSS/ProductDetail.css";

function ProductDetails() {

  const { id } = useParams();
  const product = products.find(
  (item) => item.id === Number(id)
);

const relatedProducts = products.filter(
  (item) =>
    item.category === product.category &&
    item.id !== product.id
).slice(0, 4);

const { addToCart } = useCart();

useEffect(() => {
  if (!product) return;

  let recentProducts = JSON.parse(localStorage.getItem("recentProducts")) || [];

  // Remove duplicate if it already exists
  recentProducts = recentProducts.filter(
    (item) => item.id !== product.id
  );

  // Add current product to the beginning
  recentProducts.unshift(product);

  // Keep only the latest 4 products
  recentProducts = recentProducts.slice(0, 4);

  localStorage.setItem(
    "recentProducts",
    JSON.stringify(recentProducts)
  );
}, [product]);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

return (
  <>
    <center><h2><u>Product Detail view</u></h2></center>
    <div className="details-page">
     

      <img className="details-image"
        src={product.image}
        alt={product.title}
      />

      <div className="details-content">

        <h1>{product.title}</h1>

        <div className="rating">
          ⭐⭐⭐⭐☆
          <p>{product.rating}</p>
        </div>

        <p className="category">
          Category:
          <strong> {product.category}</strong>
        </p>

        <p className="stock">
          {product.stock
            ? "✅ In Stock"
            : "❌ Out Of Stock"}
        </p>

        <h2>₹{product.price}</h2>

        <p className="description">
          {product.description}
        </p>

        <button
          className="details-btn"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </div>

    {relatedProducts.length > 0 && (
      <div className="related-section">

        <h2 className="related-title">
          You May Also Like 👇
        </h2>

        <div className="related-grid">

          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </div>
    )}

  </>
);

}

export default ProductDetails;