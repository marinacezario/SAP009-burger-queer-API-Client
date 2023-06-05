import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { NewOrder } from "./Pages/NewOrder/NewOrder";
import { CurrentOrders } from "./Pages/CurrentOrders/CurrentOrders";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-order" element={<NewOrder />} />
      <Route path="/current-orders" element={<CurrentOrders />} />
    </Routes>
  );
}
