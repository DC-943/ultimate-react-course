import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard.jsx"
import React from "react"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
