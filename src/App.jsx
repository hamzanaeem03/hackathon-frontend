
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Table from './pages/Table';

function App() {

  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/Table" element={<Table />} />

  </Routes>
  )
}

export default App
