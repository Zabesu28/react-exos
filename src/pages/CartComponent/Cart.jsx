import { Container, Table } from "react-bootstrap";

const Cart = ({cart}) => {
    console.log(cart)
  return (
    <Container className="pt-5 pb-5">
      <h1>Panier</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
        {cart.map((dish, index) => (
            <tr key={index}>
              <td>{dish.name}</td>
              <td>{dish.price}€</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Cart;
