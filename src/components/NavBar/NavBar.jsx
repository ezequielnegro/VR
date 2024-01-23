import "./NavBar.css"
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <nav className="navbar-nav">
        <ul className="navbar-ul">
            <li className=" hover:border-pink-300 navbar-li"><Link to={"/"} className="">inicio</Link></li>
            <li className=" hover:border-pink-300 navbar-li"><Link to={"/products/all"} className="">productos</Link></li>
            <li className=" hover:border-pink-300 navbar-li"><Link to={"/contact"} reloadDocument className="">Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar