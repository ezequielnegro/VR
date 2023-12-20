

const ItemList = ({productos}) => {
  return (
    <section>
        <h2>Productos</h2>
        <hr />
        <div >
        {productos.map((item) => (
        <article key={item.id}>
            <h3 className="uppercase">{item.name}</h3>
            <p>Precio: {item.price}</p>
            <img  className="w-64 h-64" src={item.images[0]} alt={item.name} />
            <hr />

            <p>Descripción: {item.description}</p>
            <p>Medidas: {item.measures}</p>
        </article> 
        ))}
        </div>


    </section>
  )
}

export default ItemList