import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Button, Input } from "@chakra-ui/react"

const Desc = () => {
  const navigate = useNavigate()
  // informações de pesquisa: 
  const [theme, setTheme] = useState('') // pesquisa
  const [gameId, setGameId] = useState(null) // escolha do usuário

  // informações do jogo:
  const [gameDesc, setGameDesc] = useState('')
  const [gameReleaseDate, setGameReleaseDate] = useState('')
  const [gameMetacritic, setGameMetacritic] = useState('')
  const [gameRecommendations, setGameRecommendations] = useState('')
  const [gameDeveloper, setGameDeveloper] = useState('')
  const [gamePublisher, setGamePublisher] = useState('')
  const [gameReqMinimu, setGameReqMinimu] = useState('')
  const [gameReqMax, setGameReqMax] = useState('')


  const getTheme = async () => {
    const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`tema,${theme}`))
    if (response) {
      setTheme(response.data)
    }
  }

  //const getGameId = async () => {
  //  const response = await axios.post('http://127.0.0.1:8080', JSON.stringify(`letras,${gameId}`))
  //  if (response) {
  //    setGameId(response.data)
  //  }
  //}

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      {!theme ? <div className="flex flex-col justify-center items-center gap-8">
        <div className='flex gap-1'>
          <Input placeholder='Digite um tema de jogo' size='md' width={230} onChange={(e) => getTheme(e.target.value)} />
          <Button colorScheme='green' onClick={getTheme}>
            Buscar
          </Button>
        </div>
        <Button colorScheme='blue' width={70} onClick={() => navigate('/')}>
          Voltar
        </Button>
      </div>
      :
      !details ? <div className="flex flex-col gap-8 items-center justify-center">
        <div className='text-justify' dangerouslySetInnerHTML={{ __html: music.replaceAll('\n', '<br />') }} />
        <div className='flex gap-1'>
          <Input placeholder='Digite o ID de alguma música da lista acima' width={430} onChange={(e) => setLyricsId(e.target.value)} />
          <Button colorScheme='green' onClick={getLyric}>
            Buscar
          </Button>
        </div>
      </div>
      :
      <div className="flex flex-col gap-6">
        <Button colorScheme='yellow' width={70} onClick={() => navigate('/')}>
          Voltar
        </Button>
        <div dangerouslySetInnerHTML={{ __html: lyrics }} />
      </div>}
    </div>
  )
}

export default Desc