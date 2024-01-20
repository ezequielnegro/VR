import { createContext,useState } from "react"



export const CartContext= createContext()

export const CartProvider= ({children}) => {
    const [cart, setCart] = useState([])
console.log(cart)
const addToCart = (item) => {
  setCart([...cart,item])
}
  
  const isInCart=(id) => {
    return cart.find(item => item.id ===id)  // se puede usar some retorna true o false
  }

  const clearCart = () => {
    setCart([])
  }

  const itemsInCart= () => {
    return cart.reduce((acc, item) => acc + item.cantidad,0)
    }
  const priceCart = () => {
    return cart.reduce((acc,item) => acc + item.price,0)
  }
    return(
         <CartContext.Provider value={{
            cart,
            isInCart, 
            addToCart,
            clearCart,
            itemsInCart,
            priceCart
         }}>
{children}
         </CartContext.Provider>

    )
}