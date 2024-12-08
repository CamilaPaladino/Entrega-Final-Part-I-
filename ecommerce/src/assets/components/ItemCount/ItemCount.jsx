import {useState} from "react"

function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue)
  const decrement = () => {
    if(count>1){
        setCount(count - 1)
    }
  }
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };
  
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