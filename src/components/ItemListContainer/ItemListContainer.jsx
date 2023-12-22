







import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {categoryName} =useParams()
console.log(categoryName)

  useEffect(() => {
    pedirDatos().then((data) => {
      console.log("datos ",data)
        const items = categoryName
        ? data.filter(prod => prod.subcategory===categoryName 
                              ||  prod.category===categoryName )
        : data
      setProductos(items)
    })
  }, [categoryName])

  return (
<>
<ItemList productos={productos}/>

</>

   
      
      )
}
export default ItemListContainer
