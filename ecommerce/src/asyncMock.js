import { db } from "./services/firebase";
import { doc, writeBatch, collection } from "firebase/firestore";


// obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod)=> prod.category === categoryId));
    }, 100);
  });
}

// obtener un solo producto por id
 export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 100);
    });
};

export const subirProductos = async () => {
const batch = writeBatch(db);
const productosRef = collection(db, "products");

products.forEach((producto) => {
  const nuevoDoc = doc(productosRef); //
  batch.set(nuevoDoc, producto); // agrega la operacion de escritura al batch
});

try {
  await batch.commit();
  console.log("Productos Subidos exitosamente");
} catch (error) {
  console.log("Error subiendo productos", error);
}
};