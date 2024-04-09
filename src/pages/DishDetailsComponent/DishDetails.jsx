import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const DishDetails = () => {
  const { slug } = useParams();
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <h1>Slug : {slug}</h1>
      </Row>
    </Container>
  );
};
export default DishDetails;
