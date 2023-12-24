import SideBar from "../SideBar/SideBar"

const ItemDetail = ({ item }) => {
  return (
    <main className="m-10">
      <section className="flex justify-center gap-4">
        <div>
          <SideBar />
        </div>
        <div className="">
          <img src={item.frontImage} alt={item.name} className="w-96 h-96 object-cover hover:scale-150" />
          <p className="text-medium w-96 my-8">
            {item.description}
            <br />
            Medidas:{item.measures}
          </p>
        </div>
        <div>
          <h2 className="my-8 uppercase font-semibold text-2xl">{item.name}</h2>
          <h3 className="my-8 uppercase font-semibold text-4xl">
            ${item.price}
          </h3>
          <p className="my-8">10% de descuento con transferencia bancaria</p>
          <button
            type="button"
            className="bg-pink-300  uppercase text-lg font-normal hover:font-semibold w-64 h-12 my-8 rounded shadow-lg shadow-pink-500"
          >
            comprar
          </button>
        </div>
      </section>
    </main>
  )
}
export default ItemDetail
