import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Button, Input } from "@chakra-ui/react"

const Vendas = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(null)
  const [gameList, setGameList] = useState(null)
  const [gameId, setGameId] = useState(null)
  const [gameOverview, setGameOverview] = useState(null)


  const getTheme = async () => {
    const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`getGameByTheme.${theme}`))
    if (response) {
      setGameList(JSON.parse(response.data.replace(/'/g, '"')))
    }
  }

  const getGameId = async () => {
    const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`getGamePrices.${gameId}`))
    if (response) {
      var resp = JSON.parse(response.data.replace(/'/g, '"'))
      console.log(resp)
      setGameOverview(resp)
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      {!gameList ? <div className="flex flex-col justify-center items-center gap-8">
        <div className='flex gap-1'>
          <Input placeholder='Digite um tema de jogo' size='md' width={230} onChange={(e) => setTheme(e.target.value)} />
          <Button colorScheme='green' onClick={getTheme}>
            Buscar
          </Button>
        </div>
        <Button colorScheme='blue' width={70} onClick={() => navigate('/')}>
          Voltar
        </Button>
      </div>
        :
        gameList && !gameOverview ? <div className="flex flex-col gap-8 items-center justify-center">
          {gameList.map(i => {
            return <p>{i}</p>
          })}
          <div className='flex gap-1'>
            <Input placeholder='Digite o ID de algum jogo da lista acima' width={430} onChange={(e) => setGameId(e.target.value)} />
            <Button colorScheme='green' onClick={getGameId}>
              Buscar
            </Button>
          </div>
        </div>
          :
          <div className="flex flex-col gap-6">
            {gameOverview.map(i => {
              return <p>{i}</p>
            })}
            <Button colorScheme='yellow' width={70} onClick={() => navigate('/')}>
              Voltar
            </Button>
          </div>}
    </div>
  )
}

export default Vendas