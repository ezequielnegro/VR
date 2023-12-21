import "./NavBar.css"



const NavBar = () => {
  return (
    <nav>
        <ul>
            <li className=" hover:border-pink-300"><a href="/" className="">inicio</a></li>
            <li className=" hover:border-pink-300"><a href="/products" className="">productos</a></li>
            <li className=" hover:border-pink-300">Contacto</li>
        </ul>
    </nav>
  )
}

export default NavBar