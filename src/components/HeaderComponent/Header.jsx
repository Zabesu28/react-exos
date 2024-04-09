import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.css";
import logo from '../../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';

function Header() {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
