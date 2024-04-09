import Dish from "../../components/DishComponent/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const dishes = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      name: "Tacos à l’unité",
      price: "3",
      slug: "tacos-a-l-unite",
      new: true
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      name: "Enchiladas",
      price: "12",
      slug: "enchiladas",
      new: false
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      name: "Mole poblano",
      price: "15",
      slug: "mole-poblano",
      new: false
    },
  ];

  const [showNewOnly, setShowNewOnly] = useState(false);
  
  const filteredDishes = showNewOnly ? dishes.filter(dish => dish.new) : dishes;

  function handleShowNewOnly(){
    setShowNewOnly(!showNewOnly);
  }

  return (
    <Container className="pt-5 pb-5">
       <Button onClick={handleShowNewOnly} variant="primary">{showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}</Button>
      <Row>
        {filteredDishes.map((dish) => (
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
