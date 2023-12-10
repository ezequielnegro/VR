import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    <nav>
        <ul>
            <li className="inicioList"><a href="/" className="inicioLink">inicio</a></li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}

export default NavBar