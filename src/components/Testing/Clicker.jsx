
 import { useState } from "react"


export const Clicker = () => {
const [counter, setCounter] =useState(0)
    //let counter=0
      const incrementar= ()  => {
        setCounter(counter + 1)
    }
     return (
      <div>

       <button onClick={incrementar}>CLICK ME</button>
       <hr />
       <p>Clicks: {counter}</p>
       </div>
   )
 }
 
