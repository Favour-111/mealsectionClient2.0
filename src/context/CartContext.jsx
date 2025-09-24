import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  const addToCart = (meal) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === meal.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...meal, quantity: 1 }];
    });
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Update Quantity (for + or - buttons)
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // ✅ Calculate Total
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
