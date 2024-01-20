import { useState, useEffect} from "react"
import { pedirDatos } from "../../utils/utils"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const {itemId} = useParams() 


  useEffect(() => {
    pedirDatos().then((data) => {
          setItem(data.find(prod => prod.id === Number(itemId)))
          })
  }, [itemId])
  return (
   <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer 