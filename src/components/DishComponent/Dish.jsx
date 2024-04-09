import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import styles from "./dish.css";

const Dish = ({ img, name, price }) => {
  return (
    <Col>
      <Card>
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Prix : {price} euros</Card.Text>
          <Button variant="primary">Voir +</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Dish;
