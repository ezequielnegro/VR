import  SideBar from "../SideBar/SideBar"



const ItemDetail = ({item}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <SideBar/>
      <div className="">
         <img src={item.frontImage} alt={item.name} className="w-96 h-96"/>
     </div>
     <div>
      <h2 className="uppercase font-bold text-2xl">{item.name}</h2>
      <h3 className="uppercase font-bold text-2xl">${item.price}</h3>
      <p>10% de descuento con transferencia bancaria</p>
      <button type="button" className="bg-pink-300  uppercase text-lg font-normal hover:font-semibold w-96">comprar</button>
     </div>
     <div className="w-max">
        <p className="text-medium">{item.description}<br />Medidas:{item.measures}</p>
     </div>
    </div>
  )
}

export default ItemDetail