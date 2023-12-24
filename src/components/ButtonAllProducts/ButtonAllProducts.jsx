import { Link } from "react-router-dom"

const ButtonAllProducts = () => {
  return (
    <div className=" flex justify-center items-center m-10">
      <button className="capitalize text-center font-semibold bg-pink-300 p-2 m-2 w-56 h-10 roudend shadow-lg shadow-pink-500">
        <Link to={"/products/all"} className="">
          todos los productos
        </Link>
      </button>
    </div>
  )
}

export default ButtonAllProducts;
