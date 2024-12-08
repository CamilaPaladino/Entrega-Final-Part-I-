import NavBar from "./assets/components/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./assets/components/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./assets/context/cartContext";

import {SubirProductos} from './assets/components/SubirProductos/SubirProductos';

import Cart from "./assets/components/Cart/Cart"
import Checkout from "./assets/components/Checkout/Checkout";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar cartCount={5}/>
        <Routes>
          <Route path="/" element={<ItemListContainer greatings="Todos los productos"/>}/>
          {/* <Route exact path="/cart"/> */}
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>:( 404 Not found</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
