import "./Checkout.css"
import { useCart } from "../../hooks/useCart";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useState } from "react";


export default function Checkout() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [direccion, setDireccion] = useState("");


  const [orderCreated, setOrderCreated] = useState(false)
  
  const {cart, totalQuantity, getTotal, clearCart} = useCart()
  const total = getTotal()

  const createOrder = async (e) => {
    e.preventDefault()
    const objOrder = {
      buyer: {
        firstName: nombre,
        lastName: apellido,
        phone: phone,
        address: direccion,
      }, 
      items: cart,
      totalQuantity,
      total,
      date: new Date()
    }

    
    const ids = cart.map((item)=> item.id)
    const productRef = collection(db, "products")

    const productsAddedFromFirestore = await getDocs(
      query(productRef, where(documentId(), "in", ids)))

      const { docs } = productsAddedFromFirestore
      const outOfStock = [];
      const batch = writeBatch(db)
      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find((prod) => prod.id === doc.id)
        const prodQuantity = productAddedToCart.quantity

        if(stockDb >= prodQuantity) {
          batch.update(doc.ref, {stock: stockDb - prodQuantity})
        }else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders")
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`El id de su orden es ${orderAdded.id}`);
        clearCart()
        setOrderCreated(true)

      }else {
        console.log("Hay productos fuera de stock")
      }
  }


  if(orderCreated) {
    <h1>La orden fue creada correctamente</h1>
  }

  return (
    <>
    <div className="containerGral">
      <h1>Checkout</h1>
      <form className="checkout">
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <label>Apellido</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        <label>Teléfono</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label>Direccion</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        <button type="submit" className="btn-al-carrito" onClick={createOrder}>
          Generar Orden
        </button>
      </form>
    </div>
    </>
  );
}