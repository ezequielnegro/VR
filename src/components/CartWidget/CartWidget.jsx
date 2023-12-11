
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({buttonName}) => {
  return (
    <div>
      <button className="bg-pink-300"><ShoppingCartIcon />{buttonName}</button>
        

    </div>
  )
}

export default CartWidget