import { Link } from "react-router-dom"


function Item({product}) {
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 card-producto">
        <img src={product.img} />
        <h2>{product.name}</h2>
        <span>$ {product.price}</span>
        <Link className="btn-primario btn-green" to={`/detail/${product.id}`}>Ver detalles</Link>
    </div>
  )
}

export default Item