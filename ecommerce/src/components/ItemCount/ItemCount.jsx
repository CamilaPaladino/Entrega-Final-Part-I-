import UseCounter from "../../hooks/UseCounter"

function ItemCount({initialValue=1, stock, onAdd}) {
  const {increment, decrement, valor: count} = UseCounter(initialValue)
  
    return (
    <>
      <div className="botones">
        <button className="btn-secundario btn-green" onClick={decrement}>-</button>
        <button className="btn-primario btn-green" onClick={() => onAdd(count)}>Agregar al carrito</button>
        <button className="btn-secundario btn-green" onClick={increment}>+</button>
      </div>
      <p className="count">Comprar: {count}</p>
    </>
  );
}

export default ItemCount