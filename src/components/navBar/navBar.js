import "./navBar.css";
import logo from "./cupcake-geek.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartWidget } from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";



export const NavBar = () => {
  return (
    
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/tienda">Kawaii Geeks
        <img src={logo} className="logoKawaiiGeeks" />
        </Navbar.Brand>
        <Nav className="me-auto">    
            <Nav.Link exact href="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <Nav.Link href="/faq">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/cart"><CartWidget /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    
  
  );
};
