

const ItemCard = ({item}) => {
  return (
    <article>
            <img  className="w-40 h-40" src={item.images[0]} alt={item.name} />
            <h3 className="uppercase w-40"><a href="">{item.name}</a></h3>
            <p>Precio: {item.price}</p>
        </article> 
  )
}

export default ItemCard