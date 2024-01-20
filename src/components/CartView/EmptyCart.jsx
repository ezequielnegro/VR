import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6"

const EmptyCart = () => {
  return (
    <section>
        <div className="flex justify-center gap-4 mb-96">
        <div >
          <h2 className="text-center text-2xl capitalize ">
            Carrito de compras
          </h2>
          <hr />
          <h3 className="text-center text-lg uppercase text-red-500 italic"> el Carrito de compras está vacío</h3>
          
          <Link to="/Products">{<FaAngleLeft/>}
          
          Seguir Comprando</Link>
         
          
          
        </div>
        </div>

    </section>
  )
}

export default EmptyCart