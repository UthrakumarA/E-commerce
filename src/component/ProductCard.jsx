import { useNavigate } from "react-router-dom";
import { useCart } from "./Cardcontext";
const ProductCard=({ product })=>
{
  const {addToCart}= useCart();
  const navigate= useNavigate();
   return (
    <div className="card" onClick={()=>navigate(`/products/${product.id}`)}>
      <img src={product.image} alt={product.title} loading="lazy"/>

      <h3>{product.title}</h3>
      
      <p>₹{product.price}</p>

      <button onClick={(e) => {e.stopPropagation(); addToCart(product);}}>Add To Cart
        <svg className="border-svg">
        <rect className="runner runner1" x="1" y="1" width="98%" height="95%" rx="10" />
        <rect className="runner runner2" x="1" y="1" width="98%" height="95%" rx="10" />
        </svg>
      </button>
    </div>
  );
}

export default ProductCard;