import axios  from 'axios';
import { Routes } from "react-router";
import { Route } from "react-router";
import NotFound from "./pages/404/NotFound";
import HomePage from "./pages/Home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import TrackingPage from "./pages/Tracking/TrackingPage";
import { useEffect,useState } from 'react';
import "./App.css";

function App() {

  const [cart, setCart] = useState([])
useEffect(() => {
  axios.get('/api/cart-item')
  .then((response)=>{
    setCart(response.data)
  })
  }, [])
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart = {cart} />}></Route>
        <Route path="checkout" element={<CheckoutPage  cart = {cart} />}></Route>
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="orders" element={<OrdersPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
