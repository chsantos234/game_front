//import { useState } from 'react'
//import axios from 'axios'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './pages/Home'
import Vendas from './pages/Vendas'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/vendas",
    element: <Vendas />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
