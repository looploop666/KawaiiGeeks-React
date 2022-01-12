import "./navBar.css";
import logo from "./cupcake-geek.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartWidget } from "../cartWidget/cartWidget";



export const NavBar = () => {
  return (
    
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Kawaii Geeks
        <img src={logo} className="logoKawaiiGeeks" />
        </Navbar.Brand>
        <Nav className="me-auto">    
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#faq">Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#carrito"><CartWidget /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    
  
  );
};
