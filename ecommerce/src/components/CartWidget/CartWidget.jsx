import cart from "../../images/cart.png"
import { useCart } from "../../hooks/useCart";
import { Link } from 'react-router-dom';

function CartWidget() {
  const {totalQuantity} = useCart();
  return (
    <Link to="/cart" href="#" className="cart">
      <img src={cart} alt="" />
      <div className="buble">
        <span>{totalQuantity}</span>
      </div>
    </Link>
  )
}

export default CartWidget