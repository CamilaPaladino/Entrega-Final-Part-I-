import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestone/products";
import { useAsync } from "../../hooks/UseAsync"



function ItemListContainer({greatings}) {
    const {categoryId} = useParams()
    const  asyncFunction = () => getProducts(categoryId)
    
    const {data: products, loading, error} = useAsync(asyncFunction)


    if (loading) {
      return (
        <div className="containerGral">
          <div className="text-loader"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="containerGral">
          <div className="text-loader"></div>
        </div>
      );
    }


  return (
      <div className="containerGral mb-3">
        <h2 className="text-center mb-5">{greatings}</h2>
        <ItemList products={products} />
      </div>
  )

}


export default ItemListContainer