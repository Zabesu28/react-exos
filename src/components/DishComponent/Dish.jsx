import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./dish.css";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

const Dish = ({ img, name, price, slug, news }) => {
  return (
    <Col>
      <Link to={"plat/" + slug} className="card-link">
        <Card>
            <div className="position-relative">
              <Card.Img className="card-img" variant="top" src={img} />
              {news && <Badge className="corner-block" bg="primary">Nouveau</Badge>}
            </div>
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
