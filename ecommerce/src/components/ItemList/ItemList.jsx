import Item from '../Item/Item'

function ItemList({products}) {
    return (
      <div className="row contenedor-productos">
           {products.map( product => <Item key={product.id} product={product} />)}   
      </div>
    )
  }

export default ItemList