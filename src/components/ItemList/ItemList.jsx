import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({productos}) => {
  return (
    <section className="max-w-3xl mx-auto flex flex-col justify-center"> 
        <h2 className="text-center uppercase text-xl">Productos</h2>
        <hr />
        <div className="flex justify-center flex-wrap gap-4 content-around max-w-3xl">
        {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>


    </section>
  )
}

export default ItemList


