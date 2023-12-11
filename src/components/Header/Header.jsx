import "./Header.css"
import logo from "./VR.jpg"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"

const Header = () => {
  return (
    <div className="Header grid grid-cols-3 gap-3 place-items-center">
      <div>  
      </div>
      <div>
        <img className="imgLogo" src={logo} alt="logo vr" />
      </div>
      <div className="">
        <CartWidget buttonName={"carrito (0) $0"}/>
      </div>
      <div className="col-span-3"><NavBar /></div>
    </div>   
  )
}
export default Header
