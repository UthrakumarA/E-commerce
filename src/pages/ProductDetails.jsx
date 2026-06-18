import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <img src={product.image} alt={product.title} width="300"/>
      <h1>{product.title}</h1> 
      <h2>₹{product.price}</h2>
      <p>{product.description}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default ProductDetails;