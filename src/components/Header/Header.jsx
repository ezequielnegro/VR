import logo from "/images/VR.jpg"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import SearchBox from "../SearchBox/SearchBox"

const Header = () => {
  return (
    <div className="grid grid-cols-3 gap-3 place-items-center">
      <SearchBox/>
      <div>
        <img className="" src={logo} alt="logo vr" />
      </div>
      <div className="px-10 py-0.5 bg-pink-200 hover:bg-pink-300">
        <CartWidget buttonName={"carrito (0) $0"} />
      </div>
      <div className="col-span-3">
        <NavBar />
      </div>
    </div>
  )
}
export default Header
