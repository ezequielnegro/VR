import "./Header.css"
import logo from "./VR.jpg"

const Header = () => {
  return (
    <div className="Header">
        <img className="imgLogo" src={logo} alt="logo vr" />    
    </div>
  )
}

export default Header