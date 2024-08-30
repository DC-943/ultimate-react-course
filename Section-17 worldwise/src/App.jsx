//import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { useState, useEffect } from "react"
import { lazy, Suspense } from "react"

import { CitiesProvider, useCities } from "./contexts/CitiesContext"
import { AuthProvider } from "./contexts/FakeAuthContext"
import ProtectedRoute from "./pages/ProtectedRoute"

import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import City from "./components/City"
import Form from "./components/Form"
import Spinner from "./components/Spinner"
import SpinnerFullPage from "./components/SpinnerFullPage"

// import Product from "./pages/Product"
// import Pricing from "./pages/Pricing"
// import Homepage from "./pages/Homepage"
// import PageNotFound from "./pages/PageNotFound"
// import AppLayout from "./pages/AppLayout"
// import Login from "./pages/Login"
const Homepage = lazy(() => import("./pages/Homepage"))
const Product = lazy(() => import("./pages/Product"))
const Pricing = lazy(() => import("./pages/Pricing"))
const Login = lazy(() => import("./pages/Login"))
const AppLayout = lazy(() => import("./pages/AppLayout"))
const PageNotFound = lazy(() => import("./pages/PageNotFound"))

// dist/assets/index-37f79642.css   29.88 kB │ gzip:   5.04 kB
// dist/assets/index-e2e2d2bd.js   511.16 kB │ gzip: 147.49 kB

//import CitiesProvider from "./contexts/CitiesContext";
//import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:9000"

function App() {
  const [cities, setCities] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(function () {
  //   console.log("loading.....")
  //   async function fetchCities() {
  //     try {
  //       setIsLoading(true)
  //       const res = await fetch(`${BASE_URL}/cities`)
  //       const data = await res.json()
  //       setCities(data)
  //       console.log("get data is:", data)
  //     } catch {
  //       alert("There was an error loading data.....")
  //     } finally {
  //       console.log("loading..3")
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchCities()
  // }, [])

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
