import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { categoryName } = useParams()
  console.log("cate: ",categoryName)

  useEffect(() => {
    pedirDatos().then((data) => {
      const items = 
          categoryName === "all"
          ? data
          :categoryName
          ? data.filter((prod) => (          
                prod.subcategory === categoryName ||
                prod.category === categoryName
              )
          )
          : data.filter((prod)=> prod.subcategory==="clasica")
      setProductos(items)
    });
  }, [categoryName])

  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}
export default ItemListContainer
