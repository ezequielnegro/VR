
import { Link } from "react-router-dom"
import {links} from "../../mock/categoryData"
const SideBar = () => {

  return (
    <nav className="h-64 w-32">
        <ul className="gap-4">

          {links.map((link) => (
            <li key={link.label} className="capitalize font-normal hover:font-bold border-t-2 border-pink-100 ">
              <Link 
                  to={link.href} className=""
                  >
                    {link.label}
              </Link>
            </li>
  
))}

        </ul>
    </nav>
  )
}

export default SideBar