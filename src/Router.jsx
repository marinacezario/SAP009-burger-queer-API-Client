import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { NewOrder } from "./Pages/NewOrder/NewOrder";
import { CurrentOrders } from "./Pages/CurrentOrders/CurrentOrders";
import { Kitchen } from "./Pages/Kitchen/Kitchen";
import { Users } from "./Pages/Users/Users";
import { Products } from "./Pages/Products/Products";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-order" element={<NewOrder />} />
      <Route path="/current-orders" element={<CurrentOrders />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
