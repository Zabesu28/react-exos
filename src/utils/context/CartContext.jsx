import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let newCart = [...cart];

    const dishIdx = newCart.findIndex((dish) => dish.id === item.id)

    // Si première ajout de l'objet
    if(dishIdx == -1){
      item.quantity = 1;
      newCart.push(item);
    }
    else{
      newCart[dishIdx].quantity++;
    }

    setCart(newCart);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
