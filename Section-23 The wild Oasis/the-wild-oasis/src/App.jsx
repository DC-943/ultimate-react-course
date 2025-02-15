import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard.jsx"
import React from "react"
import Bookings from "./pages/Bookings.jsx"
import Users from "./pages/Users.jsx"
import Settings from "./pages/Settings.jsx"
import Account from "./pages/Account.jsx"
import Login from "./pages/Login.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import GlobalStyles from "./styles/GlobalStyles.js"
import AppLayout from "./ui/AppLayout.jsx"

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
