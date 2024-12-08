import {useCart} from '../../hooks/useCart'

export default function CartItem({id, name, quantity, price}) {
  const {removeItem} = useCart()

  const handleRemove = (id) => {
    removeItem(id)
  }

  return (
    <article className="CardCartItem">
        <div className="left carrito">
          <h2 className="ItemHeaderCartItem">{name}</h2>
          <p className="text-cantidad">Cantidad: {quantity} x $ {price}</p>
          <hr />
        <p className="subtotal">Subtotal: $ {price * quantity}</p>
        </div>
      <div className="right carrito">
        <button className="btn-remove" onClick={() => handleRemove(id)}>
          X
        </button>
      </div>
    </article>
  );
}