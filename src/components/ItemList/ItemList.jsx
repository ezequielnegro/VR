

const ItemList = ({productos}) => {
  return (
    <section className="max-w-3xl flex flex-col"> 
        <h2>Productos</h2>
        <hr />
        <div className="flex flex-wrap gap-4 content-around justify-around max-w-3xl">
        {productos.map((item) => (
        <article key={item.id}>
            <img  className="w-32 h-32" src={item.images[0]} alt={item.name} />
            <h3 className="uppercase w-32">{item.name}</h3>
            <p>Precio: {item.price}</p>
        </article> 
        ))}
        </div>


    </section>
  )
}

export default ItemList