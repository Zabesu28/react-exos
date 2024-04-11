import { Container, Table } from "react-bootstrap";
import React, { useContext } from "react";
import { CartContext } from "../../utils/context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
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
    </Container>
  );
};
export default Cart;
