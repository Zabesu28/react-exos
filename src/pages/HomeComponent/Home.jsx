import Dish from "../../components/DishComponent/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import jsonDishes from '../../datas/dishes.json'
import React, { useEffect, useState } from 'react';

function App() {

  const [dishes, setDishes] = useState([]);
  const [showNewOnly, setShowNewOnly] = useState(false);
  
  useEffect(() => {
    setDishes(showNewOnly ? jsonDishes.filter(dish => dish.new) : jsonDishes)
    }, [showNewOnly]);

  function handleShowNewOnly(){
    setShowNewOnly(!showNewOnly);
  }

  return (
    <Container className="pt-5 pb-5">
       <Button onClick={handleShowNewOnly} variant="primary">{showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}</Button>
      <Row>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            img={dish.img}
            name={dish.name}
            price={dish.price}
            slug={dish.slug}
            news={dish.new}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
