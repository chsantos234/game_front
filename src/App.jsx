//import { useState } from 'react'
//import axios from 'axios'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './pages/Home'
import Vendas from './pages/Vendas'
import Desc from './pages/Desc'
import Hist from './pages/Hist'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/vendas",
    element: <Vendas />
  },
  {
    path: "/descricao",
    element: <Desc />
  },
  {
    path: "/historico",
    element: <Hist />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
