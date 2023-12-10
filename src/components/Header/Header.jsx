import "./Header.css"
import logo from "./VR.jpg"
import CartWidget from "../CartWidget/CartWidget"

const Header = () => {
  return (
    <div className="Header grid grid-cols-3 gap-3 place-items-center">
      <div>  
      </div>
      <div>
        <img className="imgLogo " src={logo} alt="logo vr" />
      </div>
      <div className="">
        <CartWidget />
      </div>
    </div>
  )
}

export default Header
