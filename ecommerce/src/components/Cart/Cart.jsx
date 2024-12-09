import "./Cart.css"
import CarritoVacio from "../../images/carrito-vacio.png"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";
import UseCounter from "../../hooks/UseCounter";
import { useNavigate } from 'react-router-dom';



export default function Cart() {
    const {cart, clearCart, getTotal, totalQuantity} = useCart();
  
    const total = getTotal();
  
    if(totalQuantity === 0){
        return (
      <div className="containerGral carrito no-items">
        <img src={CarritoVacio} alt="" />
        <h1>No hay items en el carrito</h1> <br />
        <Link to="/" className="btn-primario" style={{margin: "0 auto"}}>Agregar productos</Link>
      </div>)
    }
  
  
  
    return (
      <div className="containerGral carrito">
        <div className="title-cart">
          <h1>Tu Carrito</h1>
          <button onClick={clearCart} className="btn-trash"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
        </div>
        {cart.map((item)=> (
          <CartItem key={item.id} {...item}/>
        ))}
        <h2>Total: ${total}</h2>
        <div>
          <Link to="/" className="btn-secundario btn-green">Agregar más productos</Link>
          <Link to="/checkout" className="btn-primario btn-green">Finalizar compra</Link>
        </div>
      </div>
    );
  }