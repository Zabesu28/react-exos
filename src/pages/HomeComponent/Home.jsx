import Dish from "../../components/DishComponent/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const dishes = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      name: "Tacos à l’unité",
      price: "3",
      slug: "tacos-a-l-unite",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      name: "Enchiladas",
      price: "12",
      slug: "enchiladas",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      name: "Mole poblano",
      price: "15",
      slug: "mole-poblano",
    },
  ];

  return (
    <Container className="pt-5 pb-5">
      <Row>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            img={dish.img}
            name={dish.name}
            price={dish.price}
            slug={dish.slug}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
