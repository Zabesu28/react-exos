import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

function useTotCartPrice() {
  const { cart } = useContext(CartContext);
  const [totQty, setTotQty] = useState(0);

  useEffect(() => {
    let tot = 0;
    cart.forEach((dish) => {
      tot += dish.quantity * dish.price;
    });
    setTotQty(tot);
  }, [cart]);
  return totQty;
};

export default useTotCartPrice; 
