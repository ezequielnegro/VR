import { ButtonCard } from "../ButtonCard/ButtonCard"
import { Link } from "react-router-dom"

const ItemCard = ({item}) => {
  return (
    <article>
            <img  className="w-40 h-40" src={item.images[0]} alt={item.name} />
            <h3 className="uppercase w-40"><a className="text-sm font-bold" href="">{item.name}</a></h3>
            <p className="font-light">${item.price}</p>

  <ButtonCard> 
  <Link to={`/Item/${item.id}`}>Agregar al Carrito</Link>
  </ButtonCard>
        </article> 
  )
}

export default ItemCard