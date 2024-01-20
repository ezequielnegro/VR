
import { FaFacebookF,FaXTwitter, FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"



 const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-pink-300 gap-x-10 h-56 p-5 m-auto">
      <Link to={"https://www.instagram.com/valeriarostan.carteras"} target="_blank" rel="noopener noreferrer"> <FaInstagram className="text-4xl "/> </Link>
      <Link to={"https://twitter.com/home?lang=es"}target="_blank" rel="noopener noreferrer"> <FaXTwitter className="text-4xl"/> </Link>   
      <Link to={"https://www.facebook.com/Valeria-Rostán-Diseño-de-Carteras-1474300006118745/"} target="_blank" rel="noopener noreferrer" > <FaFacebookF className="text-4xl"/> </Link>
    </div>
  )

}
export default Footer 