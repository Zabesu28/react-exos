import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import jsonDishes from "../../datas/dishes.json";
import React, { useEffect, useState } from "react";
import styles from "./dishDetails.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DishDetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getDishBySlug();
  }, []);

  function getDishBySlug() {
    setDish(jsonDishes.find((dish) => dish.slug == slug));
  }

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
              <p><span> {dish.price} €</span></p>
              <Button variant="primary">Commander</Button> 
            </Col>
          </Row>
        </Container>
      ) : <Row>
        <h1></h1>
        </Row>}
    </>
  );
};
export default DishDetails;
