import { ButtonCard } from "../ButtonCard/ButtonCard"
import { Link } from "react-router-dom"

const ItemCard = ({ item }) => {
  return (
    <article className="flex flex-col items-center">
      <Link to={`/Item/${item.id}`}>
        <img
          className="w-40 h-36 object-cover hover:scale-105"
          src={item.frontImage}
          alt={item.name}
        />
      </Link>
      <div className="h-10">
        <h3 className="uppercase w-40">
          <Link className="text-sm font-semibold" to={`/Item/${item.id}`}>
            <p className="text-center">{item.name}</p>
          </Link>
        </h3>
      </div>
      <p className="font-light">${item.price}</p>
      <ButtonCard>
        <Link to={`/Item/${item.id}`}>
          {item.stock === 0 ? "Sin Stock" : "Ver mas..."}
        </Link>
      </ButtonCard>
    </article>
  );
};
export default ItemCard
