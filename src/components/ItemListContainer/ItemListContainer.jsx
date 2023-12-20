import { useState, useEffect, Fragment } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"




const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  console.log(productos)

  useEffect(() => {
    console.log("efecto de montaje")
    pedirDatos().then((data) => {
      setProductos(data)
    })
  }, [])

  return (
    <>
    <ItemList productos={productos}/>
    
    </>
     
    
      )
}
export default ItemListContainer;
