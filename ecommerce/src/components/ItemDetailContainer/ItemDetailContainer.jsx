import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  ItemDetail  from "../ItemDetail/ItemDetail"
import { db } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [loader, setLoader] = useState(false)
  const { productId } = useParams();

  useEffect(()=>{
    setLoader(true);
    getDoc(doc(db, 'products', productId))
      .then((querySnapshot) => {
        const prod = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(prod)
      })
      .catch((err)=> {
        console.log(err)
      })
      .finally(()=>{
        setLoader(false)
      })
  }, [productId])

    return(
        <>
      {loader 
        ? <h4 className="text-loader">Cargando detalles...</h4> 
        : <ItemDetail {...product} />
      }
    </>
  );
}

export default ItemDetailContainer