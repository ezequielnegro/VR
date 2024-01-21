import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryName, subcategoryName } = useParams();
  console.log("sub",categoryName,subcategoryName)

  useEffect(() => {
    // 1- armar referencia (sincronico)
    const productosRef = collection(db, "productos");
    const consulta= categoryName === "all"
                    ? productosRef
                    : categoryName
                    ? query(productosRef, where("category", "==", categoryName ) ,where("subcategory", "==" ,subcategoryName)) 
                    : query(productosRef, where("category", "==", "cartera" ) ,where("subcategory", "==" ,"clasica"))

    //2- llamar referencia (asincrónico)
    getDocs(consulta).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setProductos(data);
    });
  }, [categoryName,subcategoryName]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};
export default ItemListContainer;
