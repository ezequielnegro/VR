import { useState, useEffect } from "react"

const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null)
 const[id, setId] =useState(1)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json()) //método .json
      .then((data) => {
        console.log(data) 
        setPokemon(data)
      })
  }, [id])

  const handleAnterior = () => {
    id > 1 && setId(id -1)
  }
const handleSiguiente = () => {
  setId(id +1)
}

  return (
    <div className="container m-auto mt-8">
      <h2 className="text-4xl font-semibold">PokeApi</h2>
      <hr />
      {  
       pokemon &&
       <> 
   <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
   <img src={pokemon.sprites.front_default} alt="{pokemon.name}" />
       </>
      
      }
            <div className="flex gap-5">
                <button onClick={handleAnterior}>Anterior</button>
                <button onClick={handleSiguiente}>Siguiente</button>

            </div>


    </div>
  )
}

export default PokeApi
