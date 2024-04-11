import { Container, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { CartContext } from "../../utils/context/CartContext";
import useTotCart from "../../utils/hooks/useTotCart";
import useTotCartPrice from "../../utils/hooks/useTotCartPrice";
import { Helmet } from "react-helmet";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totQty = useTotCart();
  const totPrice = useTotCartPrice();

  return (
    <>
      <Helmet>
        <title>Panier</title>
      </Helmet>
      <Container className="pt-5 pb-5">
        <h1>Panier</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((dish, index) => (
              <tr key={index}>
                <td>{dish.name}</td>
                <td>{dish.price}€</td>
                <td>{dish.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>Prix total de la commande : {totPrice}€</p>
        <p className="text-end">{totQty} éléments dans le panier</p>
      </Container>
    </>
  );
};
export default Cart;
