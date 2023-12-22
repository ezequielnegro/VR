import { useState, useEffect} from "react"
import { pedirDatos } from "../../utils/utils"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const {itemId} = useParams()


console.log("itemId=",itemId)
console.log("item=",item)

  useEffect(() => {
    pedirDatos().then((data) => {
            console.log("data ", data)
          setItem(data.find(prod => prod.id === Number(itemId)))
          })
  }, [itemId])
  console.log("item=",item)
  return (
   <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer 