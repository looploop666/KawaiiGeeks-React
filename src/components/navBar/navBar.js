import "./navBar.css";
import logo from "./cupcake-geek.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CartWidget } from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/tienda">
          Kawaii Geeks
          <img src={logo} alt="logo" className="logoKawaiiGeeks" />
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link exact href="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/tienda">
                Tienda
              </Nav.Link>
              <Nav.Link href="/faq">Preguntas Frecuentes</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/cart">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
