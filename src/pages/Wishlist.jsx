import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CardContext";
import toast from "react-hot-toast";
import "../CSS/Wishlist.css";

function Wishlist() {
   const navigate = useNavigate();

   const {wishlistItems,removeFromWishlist} = useWishlist();
   const {addToCart} = useCart();

  return (
    <div className="wishlist-container">
        <h1 className="wishlist-title">❤️ My Wishlist</h1>

        <p className="wishlist-count">
            You have {wishlistItems.length} favourite product
            {wishlistItems.length !== 1 && "s"}
        </p>
        {
        
        wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
            <h2>💔 Your wishlist is empty</h2>
            <p>Start adding your favourite products.</p>
            <button className="continue-shopping-btn"onClick={() => navigate("/products")}>
                🛍 Continue Shopping
            </button>
        </div>
        ) : (
        <div className="wishlist-grid">
        {
           wishlistItems.map((product) => (
           <div key={product.id}className="wishlist-card">

           <img src={product.image} alt={product.title}/>
           <h3>{product.title}</h3>
           <p className="wishlist-category">{product.category}</p>
           <p className="wishlist-price">₹{product.price}</p>
           <button className="wishlist-cart-btn" onClick={() => { const added = addToCart(product, false);

if (added) {
    removeFromWishlist(product.id, false);
    toast.success("🛒 Product moved to cart");
}}}>
             🛒 Move To Cart
            </button>
            <button className="wishlist-remove-btn" onClick={() =>removeFromWishlist(product.id)}>
              🗑 Remove
            </button>
        </div>))
        }
        </div>
        )
        }
    </div>
);
}
export default Wishlist;