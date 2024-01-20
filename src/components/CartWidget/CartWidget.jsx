import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"

const CartWidget = ({ buttonName }) => {
  return (
    <>
      <button >
     <Link to="/cart" className="flex"><FaCartShopping />{buttonName} </Link>
      </button>
    </>
  )
}
export default CartWidget
  
