import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";

import { NotificationProvider } from "./context/NotificationContext";

import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NotificationProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greatings="Todos los productos"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>:( 404 Not found</h1>} />
        </Routes>
        </NotificationProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
