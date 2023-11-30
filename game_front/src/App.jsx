//import { useState } from 'react'
//import axios from 'axios'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

function App() {
/*
  async function get_json() {
    await axios.get("http://localhost:5173/")
      .then(function (response) {
        setResp(response)
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  const [resp,setResp] = useState()
*/
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
