import Dashboard from "@/pages/dashboard/Dashboard"
import Login from "@/pages/login/Login"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"


function RouterController() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
  )
}

export default RouterController