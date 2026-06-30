import { Routes } from "react-router";
import { Route } from "react-router";
import NotFound from "./pages/404/NotFound";
import HomePage from "./pages/Home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import TrackingPage from "./pages/Tracking/TrackingPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="checkout" element={<CheckoutPage />}></Route>
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="orders" element={<OrdersPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
