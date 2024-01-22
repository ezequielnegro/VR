import { useState, useEffect} from "react"
import {getDoc,doc} from "firebase/firestore" 
import {db} from "../../firebase/config"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const {itemId} = useParams()


  useEffect(() => {
	// 1- armar referencia (sincronico)
  const docRef = doc(db,'productos', itemId)
  //2- llamar referencia (asincrónico)
getDoc(docRef)
.then ((docSnapshot) => { 
  const data =  {
    ...docSnapshot.data(),
    id: docSnapshot.id
     
  }
   setItem(data)
})}
  , [itemId])
  return (
   <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer 