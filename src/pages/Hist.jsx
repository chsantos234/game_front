import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Button, Input } from "@chakra-ui/react"

const Hist = () => {
  const [theme, setTheme] = useState('') // pesquisa
  const [gameId, setGameId] = useState(null) // escolha do usuário

  const [gameTodayStore, setGameTodayStore] = useState('')
  const [gameTodayFormatted, setGameTodayFormatted] = useState('')
  const [gameLowestStore, setGameLowestStore] = useState('')
  const [gameLowestFormatted, setGameLowestFormatted] = useState('')
  const [gamePriceUrl, setGamePriceUrl] = useState('')
  const [gameLowestDate, setGameLowestDate] = useState('')

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      {!music ? <div className="flex flex-col justify-center items-center gap-8">
        <div className='flex gap-1'>
          <Input placeholder='Digite o nome do(a) artista' size='md' width={230} onChange={(e) => setArtist(e.target.value)} />
          <Button colorScheme='green' onClick={getMusic}>
            Buscar
          </Button>
        </div>
        <Button colorScheme='blue' width={70} onClick={() => navigate('/')}>
          Voltar
        </Button>
      </div>
      :
      !lyrics ? <div className="flex flex-col gap-8 items-center justify-center">
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
        <div dangerouslySetInnerHTML={{__html: lyrics}} />
      </div>}
     </div> 
  )
}

export default Hist