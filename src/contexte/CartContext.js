import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Charger le panier depuis localStorage au démarrage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Ajouter un produit au panier
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id_produit === item.id_produit,
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id_produit === item.id_produit
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Supprimer un produit du panier
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id_produit !== itemId),
    );
  };

  // Changer la quantité d’un produit
  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id_produit === itemId ? { ...item, quantity: quantity } : item,
      ),
    );
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculer le prix total
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.Prix * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
