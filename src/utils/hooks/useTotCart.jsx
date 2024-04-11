import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../utils/context/CartContext";

function useTotCart() {
  const { cart } = useContext(CartContext);
  const [totQty, setTotQty] = useState(0);

  useEffect(() => {
    let tot = 0;
    cart.forEach((dish) => {
      tot += dish.quantity;
    });
    setTotQty(tot);
  }, [cart]);
  return totQty;
};

export default useTotCart; 
