import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart): [];
  });

  useEffect(() => { 
    localStorage.setItem("cart",JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, showToast = true) => {
    const alreadyExists = cartItems.find((item) => item.id === product.id);
    if (alreadyExists) {
      toast.error("Product already in cart");
      return false;
    }
    
    setCartItems([...cartItems,product]);
    
    if (showToast) {
      toast.success(`${product.title} added to cart`);
    }
    return true;
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    toast.success("Product removed from cart");
  };

  const cartCount = cartItems.length;

  const cartTotal = cartItems.reduce((total, item) => total + item.price,0);

  return (
    <CartContext.Provider
      value={{ cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        cartTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);