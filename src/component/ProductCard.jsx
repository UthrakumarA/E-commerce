import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { useWishlist } from "../context/WishlistContext";
import "../CSS/Product.css";

const ProductCard=({ product })=>{
  const [animateHeart, setAnimateHeart] = useState(false);
  const { addToCart } = useCart();
  const {wishlistItems,addToWishlist,removeFromWishlist} = useWishlist();
  const navigate= useNavigate();

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleWishlist = (e) => {
     e.stopPropagation();
     
     if (isWishlisted) {
      removeFromWishlist(product.id);
    }
    else {
      addToWishlist(product);
      setAnimateHeart(true);
      setTimeout(() => {
        setAnimateHeart(false);
      }, 350);
    }
  };

 return (
    <div className="card" onClick={()=>navigate(`/Products/${product.id}`)}>
      <button className={`wishlist-btn ${animateHeart ? "heart-pop" : ""}`} onClick={handleWishlist} 
        title={isWishlisted ? "Remove from Wishlist": "Add to Wishlist"}>
        {isWishlisted ? "❤️" : "🤍"}
      </button>
      <img src={product.image} alt={product.title} loading="lazy"/>

      <h3>{product.title}</h3>
      <p>{product.category}</p><br />
      <p style={{color:"#00c8ff"}}>₹{product.price}</p>

      <button className="card-btn" onClick={(e) => {e.stopPropagation(); addToCart(product);}}>Add To Cart
        <svg className="border-svg">
        <rect className="runner runner1" x="1" y="1" width="98%" height="95%" rx="10" />
        <rect className="runner runner2" x="1" y="1" width="98%" height="95%" rx="10" />
        </svg>
      </button>
    </div>
  );
}

export default ProductCard;