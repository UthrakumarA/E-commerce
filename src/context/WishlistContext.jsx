import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

    const [wishlistItems, setWishlistItems] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);

    const addToWishlist = (product) => {

        const alreadyExists = wishlistItems.find(
            (item) => item.id === product.id
        );

        if (alreadyExists) {
            toast.error("Product already in wishlist");
            return;
        }

        setWishlistItems([
            ...wishlistItems,
            product
        ]);

        toast.success(`${product.title} added to wishlist`);
    };

const removeFromWishlist = (id, showToast = true) => {

    const updatedWishlist = wishlistItems.filter(
        (item) => item.id !== id
    );

    setWishlistItems(updatedWishlist);

    if (showToast) {
        toast.success("Product removed from wishlist");
    }
};

    const wishlistCount = wishlistItems.length;

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                wishlistCount
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);