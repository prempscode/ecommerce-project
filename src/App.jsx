import { Routes } from "react-router";
import { Route } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="checkout" element={<CheckoutPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
