import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  async function get_json() {
    await axios.get("http://localhost:5173/")
      .then(function (response) {
        setResp(response)
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [resp,setResp] = useState()

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setCount1((count1) => count1 + 1)}>
        count is {count1}
      </button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        count is {count2}
      </button>
    </>
  )
}

export default App
