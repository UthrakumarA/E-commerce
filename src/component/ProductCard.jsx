import { useNavigate } from "react-router-dom";
const ProductCard=({ product })=>
{
  const navigate= useNavigate();
   return (
    <div className="card" onClick={()=>navigate(`/products/${product.id}`)}>
      <img src={product.image} alt={product.title} loading="lazy"/>

      <h3>{product.title}</h3>
      
      <p>₹{product.price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;