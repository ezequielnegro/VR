import ItemCount from "../Testing/ItemCount.JSX"

const ItemListContainer = ({ greeting }) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta")
    }, 3000);
  });

  promesa.then(() => {
    console.log("Hola mundo")
  });

  return (
    <>
      <h3>{greeting}</h3>
      <ItemCount stock={9} initial={1} />
    </>
  )
}
export default ItemListContainer
