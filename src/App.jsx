import { Routes } from "react-router";
import { Route } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="checkout" element={<CheckoutPage />}></Route>
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="orders" element={<OrdersPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
