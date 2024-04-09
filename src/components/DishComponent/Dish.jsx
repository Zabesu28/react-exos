import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import styles from "./dish.css";
import { Link } from 'react-router-dom';

const Dish = ({ img, name, price, slug }) => {
  return (
    <Col>
    <Link to={"plat/" + slug}>
      <Card>
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price} €</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
};
export default Dish;
