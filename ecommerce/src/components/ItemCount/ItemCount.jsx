import UseCounter from "../../hooks/UseCounter"

function ItemCount({initialValue=1, stock, onAdd}) {
  const {increment, decrement, valor: count} = UseCounter(initialValue)
  
    return (
    <>
      <div className="botones">
        <button onClick={decrement}>-</button>
        <button className="agregar" onClick={() => onAdd(count)}>Agregar al carrito</button>
        <button onClick={increment}>+</button>
      </div>
      <p className="count">Comprar: {count}</p>
    </>
  );
}

export default ItemCount