
import { createContext, useContext, useMemo, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + (Number(item.quantity) || 1);
    }, 0);
  }, [cart]);


  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;

      return total + price * quantity;
    }, 0);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (Number(item.quantity) || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (id, quantity) => {
    const newQuantity = Number(quantity);

    if (newQuantity < 1) {
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };


  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };


  const clearCart = () => {
    setCart([]);
  };


  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prevWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevWishlist, product];
    });
  };

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const value = {
    cart,
    cartCount,
    cartTotal,

    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,

    wishlist,
    toggleWishlist,
    isWishlisted,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "useShop must be used inside ShopProvider"
    );
  }

  return context;
};

export default ShopContext;
