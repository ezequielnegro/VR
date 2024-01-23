import ButtonRose from "../ButtonRose/ButtonRose"
import { db } from "../../firebase/config"
import {collection,addDoc,getDoc, updateDoc,doc}  from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Successful from "./Successful"


const CheckoutForm = () => {

    const { cart, priceCart,clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
      });

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
 //cambia el stock de la base       
        cart.forEach(item => {
            const docRef= doc(db,'productos', item.id)
            getDoc(docRef)
                .then(doc=>{
                    updateDoc(docRef,{
                        stock: doc.data().stock - item.cantidad
                    })
                })
        })
        
//agrega documento a la base        
        addDoc(ordersRef, orden)
        .then(doc => setOrderId(doc.id))
          clearCart()
      }

      if (orderId) {
        return(
    <Successful orderId={orderId} />
        )
      }

  return (
    <div className="container m-auto mt-10">
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

export default CheckoutForm