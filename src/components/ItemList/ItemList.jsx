import ItemCard from "../ItemCard/ItemCard"
import { Link } from "react-router-dom"


const ItemList = ({productos}) => {
  return (
    <section className="flex flex-row justify-center gap-4"> 
        <div className="flex justify-center flex-wrap gap-2 content-around max-w-3xl border-t-2 border-pink-100 py-4">
        {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>
    </section>
  )
}

export default ItemList


