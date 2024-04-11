import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.css";
import logo from '../../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../utils/context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  function getQuantity(){
    let totQt = 0;
    cart.forEach(dish => {
      totQt += dish.quantity
    })
    return totQt;
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src={logo}
            alt="Mexicain qui fait de la guitare"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="reset-navlink" to='/'>Accueil</NavLink>
            <NavLink className="reset-navlink" to='/propos'>A propos</NavLink>
            <NavLink className="reset-navlink" to='/cart'>Panier ({ getQuantity() || 0 })</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
