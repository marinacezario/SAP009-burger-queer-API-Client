import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import { Login } from './Pages/Login/Login';
import { NewOrder } from './Pages/NewOrder/NewOrder'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/new-order" element={<NewOrder/>} />
      </Routes>
    </BrowserRouter>
  )
}
