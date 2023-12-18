import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const CartWidget = ({ buttonName }) => {
  return (
    <>
      <button>
        <ShoppingCartIcon />
        {buttonName}
      </button>
    </>
  )
}
export default CartWidget
  
