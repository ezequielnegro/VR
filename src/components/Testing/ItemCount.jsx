import { useState } from "react"

const ItemCount = ({stock,initial}) => {
  const [counter, setCounter] = useState(initial)

  const incrase = () => {
     counter < stock && setCounter(counter + 1)
    
  }
  const decrase = () => {
    counter > initial && setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={incrase}>+</button>
      <p>{counter}</p>
      <button onClick={decrase}>-</button>
    </div>
  )
}

export default ItemCount;
