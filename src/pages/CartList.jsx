import { useCart } from "../context/Cardcontext";
import "../CartList.css";

const CartList = () => {

  const {
    cartItems,
    removeFromCart,
    cartTotal,
    cartCount
  } = useCart();

  return (
    <div className="cart-container">

  <h1 className="cart-title">
    My Cart
  </h1>

  <p className="Cart-Total-Item"><b>Total Cart Item: {cartCount}</b></p><br />

  {cartItems.length === 0 ? (
    <h2 className="empty-cart">
      Cart is Empty
    </h2>
  ) : (
    <>
      {cartItems.map((item) => (
  <div
    key={item.id}
    className="cart-item"
  >

    <img
      src={item.image}
      alt={item.title}
      className="cart-image"
    />

    <div className="cart-info">

      <h3>{item.title}</h3>

      <p className="cart-price">
        ₹{item.price}
      </p>

    </div>

    <button
      className="remove-btn"
      onClick={() =>
        removeFromCart(item.id)
      }
    >
      Remove
    </button>

  </div>
))}

      <div className="cart-total">
        <h2>
          Total : ₹{cartTotal}
        </h2>
      </div>
    </>
  )}

</div>
  );
};

export default CartList;