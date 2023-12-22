import { ButtonCard } from "../ButtonCard/ButtonCard"
import { Link } from "react-router-dom"

const ItemCard = ({ item }) => {
  return (
    <article>
      <Link to={`/Item/${item.id}`}>
        <img className="w-40 h-40" src={item.frontImage} alt={item.name} />
      </Link>
      <h3 className="uppercase w-40">
        <Link className="text-sm font-bold" to={`/Item/${item.id}`}>
          {item.name}
        </Link>
      </h3>
      <p className="font-light">${item.price}</p>
      <ButtonCard>
        <Link to={`/Item/${item.id}`}>Agregar al Carrito</Link>
      </ButtonCard>
    </article>
  )
}

export default ItemCard
