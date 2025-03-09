import Dashboard from "@/pages/dashboard/Dashboard"
import Login from "@/pages/login/Login"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import Articulos from "@/pages/articulos/Articulos"
import Proveedores from "@/pages/proveedores/Proveedores"



function RouterController() {
  return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path="/articulos" element={<ProtectedRoute><Articulos /></ProtectedRoute>} />
    <Route path="/proveedores" element={<ProtectedRoute><Proveedores /></ProtectedRoute>} />
  </Routes>
  )
}

export default RouterController