import React from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <Container className="pt-5 pb-5 text-center">
        <h1>Page non trouvée</h1>
      </Container>
    </>
  );
};
export default NotFound;
