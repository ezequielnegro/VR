import { FaPlus, FaMinus } from "react-icons/fa6"
import ButtonRose from "../ButtonRose/ButtonRose"

const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  return (
    <>
      {stock === 0 ? (
        <p className="font-bold text-2xl">Sin Stock</p>
      ) : (
        <div className="flex justify-start items-center">
          <ButtonRose
            className={`w-12 my-0 flex justify-center items-center`}
            onClick={handleRestar}
          >
            {<FaMinus className="text-3xl" />}
          </ButtonRose>
          <p className="text-3xl w-12 text-center">{cantidad}</p>
          <ButtonRose
            className={`w-12 my-0 flex justify-center items-center`}
            onClick={handleSumar}
          >
            {<FaPlus className="text-3xl" />}
          </ButtonRose>
        </div>
      )}
    </>
  )
}

export default QuantitySelector
