

const QuantitySelector = ({cantidad, stock , setCantidad}) => {



  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }
   
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  return (
    <>
    {
      
      stock === 0
    ? <p>Sin Stock</p>
    : <div>
    <button onClick={handleRestar}>-</button>
    <span>{cantidad}</span>
    <button onClick={handleSumar}>+</button>
    </div> 
  }
    </>

  )
}

export default QuantitySelector