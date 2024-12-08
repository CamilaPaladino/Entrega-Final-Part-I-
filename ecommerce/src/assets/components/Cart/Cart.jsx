import "./Cart.css"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";


export default function Cart() {
    const {cart, clearCart, getTotal, totalQuantity} = useCart();
  
    const total = getTotal();
  
    if(totalQuantity === 0){
      return <h1>No hay items en el carrito</h1>
    }
  
  
  
    return (
      <div className="containerGral carrito">
        <h1>Tu Carrito</h1>
        {cart.map((item)=> (
          <CartItem key={item.id} {...item}/>
        ))}
        <h2>Total: ${total}</h2>
        <div>
          <button onClick={clearCart} className="btn-al-carrito">Limpiar Carrito</button>
          <Link to="/checkout" className="btn-al-carrito">Checkout</Link>
        </div>
      </div>
    );
  }