import cart from "../../../images/cart.png"

function CartWidget() {
  const {totalQuantity} = useCart();
  return (
    <a href="#" className="cart">
      <img src={cart} alt="" />
      <div className="buble">
        <span>{totalQuantity}</span>
      </div>
    </a>
  )
}

export default CartWidget