



const Successful = ({orderId}) => {
  return (
    <div>
        <h2 className="uppercase font-bold text-2xl">Compra Finalizada</h2>
      <hr />
    <h2>Gracias por tu compra</h2>
    <hr />
    <p>tu código de Orden es: {orderId}</p>
</div>
  )
}

export default Successful