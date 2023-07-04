import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { NewOrder } from "./Pages/NewOrder/NewOrder";
import { CurrentOrders } from "./Pages/CurrentOrders/CurrentOrders";
import { Kitchen } from "./Pages/Kitchen/Kitchen";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-order" element={<NewOrder />} />
      <Route path="/current-orders" element={<CurrentOrders />} />
      <Route path="/kitchen" element={<Kitchen />} />
    </Routes>
  );
}
