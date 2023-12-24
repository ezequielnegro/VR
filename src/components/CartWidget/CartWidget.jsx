import { FaCartShopping } from "react-icons/fa6";


const CartWidget = ({ buttonName }) => {
  return (
    <>
      <button className="flex">
      <FaCartShopping />
        {buttonName}
      </button>
    </>
  )
}
export default CartWidget
  
