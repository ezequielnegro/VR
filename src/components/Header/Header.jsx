 import logo from "/images/VR.jpg"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import SearchBox from "../SearchBox/SearchBox"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link} from "react-router-dom"

const Header = () => {
  const {itemsInCart, priceCart} = useContext(CartContext)
  return (
    <div className="grid grid-cols-3 gap-3 place-items-center">
      <SearchBox/>
      <div>
        <img className="" src={logo} alt="logo vr" />
      </div>
      <div className="px-10 py-0.5 bg-pink-200 hover:bg-pink-300">
     
        <CartWidget buttonName={`Carrito (${itemsInCart()}) $${priceCart()}`} />
      </div>
      <div className="col-span-3">
        <NavBar />
      </div>
    </div>
  )
}
export default Header
