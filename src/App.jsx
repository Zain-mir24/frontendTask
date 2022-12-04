import * as React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";
import Info from "./pages/Info";
import "./style.css"
import Table from "./pages/CallList/CallList.jsx";

export default function App() {
  return (
    <div id="root" >
      <Router>
        <Routes>

          <Route path="*" element={<Navigate to="Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/CallScreen" element={<Table />} />


        </Routes>
      </Router>
    </div >
  )
}
