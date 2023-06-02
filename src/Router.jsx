import { Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login';
import { NewOrder } from './Pages/NewOrder/NewOrder';

export function Router() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/newOrder" element={<NewOrder />} />
</Routes>
  );
}
