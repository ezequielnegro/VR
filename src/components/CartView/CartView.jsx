import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import EmptyCart from "./EmptyCart"
import { FaAngleLeft, FaRegTrashCan } from "react-icons/fa6"
import { Link } from "react-router-dom"
import ButtonRose from "../ButtonRose/ButtonRose"
import { Tooltip } from 'react-tooltip'

const CartView = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext)

  if (cart.length == 0) {
    return <EmptyCart />
  }

  let arsPe = new Intl.NumberFormat('sp-AR', {
    style: 'currency',
    currency: 'ARS',
})
  return (
    <section>
      <div className="flex justify-center gap-4">
        <div>
          <h2 className="text-center text-2xl capitalize ">
            Carrito de compras
          </h2>
          <hr />
          <Link to="/Products">
            {<FaAngleLeft />}
            Seguir Comprando
          </Link>
          <hr />
          <ButtonRose onClick={clearCart} className="w-64">Vaciar Carrito</ButtonRose>
        </div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img
                className="w-40 h-36 object-cover"
                src={item.frontImage}
                alt={item.name}
              />
              <div className=" max-w-3xl border-t-2 border-pink-100 py-4">
                <h3>{item.name}</h3>
                <p> {arsPe.format(item.price)}</p>
                <p>cantidad:{item.cantidad}</p>
                <button onClick={() => removeItem(item.id)}>
                  {<FaRegTrashCan data-tooltip-id="trash"/>}
                  <Tooltip id="trash"
                  place="right"
                  content="Eliminar"/>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CartView
