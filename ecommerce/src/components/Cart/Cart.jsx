import "./Cart.css"
import CarritoVacio from "../../images/carrito-vacio.png"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";
import UseCounter from "../../hooks/UseCounter";


export default function Cart() {
    const {cart, clearCart, getTotal, totalQuantity} = useCart();
  
    const total = getTotal();
  
    if(totalQuantity === 0){
        return (
      <div className="containerGral carrito no-items">
        <img src={CarritoVacio} alt="" />
        <h1>No hay items en el carrito</h1>
      </div>)
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