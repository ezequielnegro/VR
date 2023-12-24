
import NavBar from "../NavBar/NavBar"
import { FaFacebookF,FaXTwitter, FaInstagram } from "react-icons/fa6";




 const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-pink-300 gap-x-10 h-56 p-5 m-auto">
      <FaFacebookF className="text-4xl"/> 
      <FaXTwitter className="text-4xl"/> 
      <FaInstagram className="text-4xl "/>
    </div>
  )
}
export default Footer