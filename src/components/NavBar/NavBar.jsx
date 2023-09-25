import "./NavBar.css";
import LoginIcon from '@mui/icons-material/Login';
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <nav>
        <ul>
            <li className="inicioList"><a href="/" className="inicioLink">inicio</a></li>
            <li>Productos</li>
            <li>Contoactos</li>
            <li className="login"><LoginIcon /></li>
            <li className="cart"><CartWidget /></li>

        </ul>
    </nav>
  )
}

export default NavBar