import logo from "../../images/logoWhite.png"
import CartWidget from "../CartWidget/CartWidget"
import Item from "../ItemNav/ItemNav"
import { Link } from "react-router-dom"

function NavBar({cartCount}) {
  return (
    <nav>
        <Link to="/"><img src={logo} alt="Estilo Hogar" /></Link>
        
        
        <ul>
          <li className="itemNavBar"><Item nombre="Electro" to="/category/electro" /></li>          
          <li className="itemNavBar"><Item nombre="Muebles" to="/category/muebles" /></li>         
          <li className="itemNavBar"><Item nombre="Blanquería" to="/category/blanco" /></li>          
          <li>
            <form role="search">
              <CartWidget cartCount={cartCount}></CartWidget>
            </form>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar