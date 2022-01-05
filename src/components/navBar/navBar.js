import "./navBar.css";
import logo from './cupcake-geek.png';  

export const NavBar = () => {

    return (

    <nav className="navBar">
        <h1>Kawaii Geeks</h1>
        <img src={logo} className="logoKawaiiGeeks"/>
       
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Preguntas Frecuentes</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
      </ul>
    </nav>

    )
}