import "./NavBar.css"
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <nav>
        <ul>
            <li className=" hover:border-pink-300"><Link to={"/"} className="">inicio</Link></li>
            <li className=" hover:border-pink-300"><Link to={"/products"} className="">productos</Link></li>
            <li className=" hover:border-pink-300"><Link to={"/contact"} className="">Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar