import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import jsonDishes from "../../datas/dishes.json";
import React, { useEffect, useState } from "react";
import styles from "./dishDetails.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../../utils/context/CartContext";

const DishDetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setDish(jsonDishes.find((dish) => dish.slug == slug));
  }, []);

  return (
    <>
      {dish ? (
        <Container className="pt-5 pb-5 container-details">
          <Row>
            <Col>
              <img className="card-imgD" variant="top" src={dish.img} />
            </Col>
            <Col>
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
              <p>
                <span> {dish.price} €</span>
              </p>
              <Button variant="primary" onClick={() => addToCart(dish)}>
                Commander
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <h1>Aucun article n'a été trouvé</h1>
        </Row>
      )}
    </>
  );
};
export default DishDetails;
