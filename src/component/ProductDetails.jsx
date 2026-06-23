import { useParams } from "react-router-dom";
import products from "../data/products";
import "../CSS/ProductDetail.css";

function ProductDetails() {

  const { id } = useParams();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

return (
  <div className="details-page">

    <img className="details-image"
      src={product.image}
      alt={product.title}
    />

    <div className="details-content">

      <h1>{product.title}</h1>
      <h2>₹{product.price}</h2>
      <p>{product.description}</p>
      <button onClick={(e) => {e.stopPropagation(); addToCart(product);}}>Add To Cart</button>

    </div>

  </div>
);
}

export default ProductDetails;