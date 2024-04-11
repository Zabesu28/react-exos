import "./App.css";
import Home from "./pages/HomeComponent/Home.jsx";
import Layout from "./components/LayoutComponent/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import DishDetails from "./pages/DishDetailsComponent/DishDetails.jsx";
import NotFound from "./pages/NotFoundComponent/NotFound.jsx"
import Propos from "./pages/AboutComponent/About.jsx"
import Cart from "./pages/CartComponent/Cart.jsx"
import React, { useEffect, useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(item){
    setCart([...cart ,item]);
  }

  return (
      <main>
        <Routes>
          <Route element={<Layout cart={cart}/>}>
            <Route index element={<Home />} />
            <Route path="propos" element={<Propos />} />
            <Route path="plat/:slug" element={<DishDetails addToCart={addToCart} />} />
            <Route path="cart" element={<Cart cart={cart}/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
  );
}

export default App;
