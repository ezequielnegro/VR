import { useContext, useState } from "react"
import ButtonRose from "../ButtonRose/ButtonRose"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import {collection,addDoc,getDoc, updateDoc,doc}  from "firebase/firestore"

const Checkout = () => {
  const { cart, priceCart,clearCart } = useContext(CartContext)
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null)

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const orden = {
      cliente: values,
      items: cart,
      total: priceCart(),
      fecha: new Date(),
    }   
    const ordersRef = collection(db, 'orders')
    
    cart.forEach(item => {
        const docRef= doc(db,'productos', item.id)
        getDoc(docRef)
            .then(doc=>{
                updateDoc(docRef,{
                    stock: doc.data().stock- item.cantidad
                })
            })
    })
    
    
    addDoc(ordersRef, orden)
    .then(doc => setOrderId(doc.id))
      clearCart()
  }

  if (orderId) {
    return(
        <div>
            <h2>Gracias por tu compra</h2>
            <hr />
            <p>tu código de Orden es: {orderId}</p>
        </div>
    )
  }

  return (
    <div className="container m-auto mt-10">
      <h2>Checkout</h2>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mt-4"
      >
        <input
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={values.direccion}
          onChange={handleInputChange}
          name="direccion"
        />
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <ButtonRose type="submit" className="w-64">
          Enviar
        </ButtonRose>
      </form>
    </div>
  )
}

export default Checkout

/* const[nombre,setNombre] = useState("")

const handleNombre =  (e) => { 
    console.log(e.target.value)
    setNombre(e.target.value)
}*/
