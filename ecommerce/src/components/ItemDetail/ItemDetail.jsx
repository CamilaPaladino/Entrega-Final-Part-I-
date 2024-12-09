import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({id, name, img, description, price, stock }) {
  const { addItem, isInCart } = useCart();
  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
    }
    addItem(productToAdd)
  }

  return (
    <>
      <div className="containerGral detail">
        <div className="left">
          <img src={img} />
        </div>
        <div className="right">
          <h1>{name}</h1>
          <p className="text">{description}</p>
          <p className="precio">$ {price}</p>
          <div className="contador">
            {
              isInCart(id) ? (
                <Link to="/cart" className="btn-al-carrito">Ir al carrito</Link>
              ):
              (
                <ItemCount stock={stock} onAdd={ handleAdd } />
              )
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail