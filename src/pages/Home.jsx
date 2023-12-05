import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='h-screen overflow-y-hidden flex flex-col justify-between items-center gap-10'>
      <h1 className='text-6xl font-medium mb-7 mt-40 font-Croissant'>Escolha uma das opções</h1>
      <ul1 className='flex gap-y-12 bg-slate-400 p-10 rounded-lg items-center text-lg text-gray-100 font-medium flex-col'>
        <li1 className='flex flex-col gap-4 items-center'>
          <p>
            Ver preços entre vendas
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/vendas')}>
            Clique
          </Button>
        </li1>
      </ul1>
      <ul2 className='flex gap-y-12 bg-slate-400 p-10 rounded-lg items-center text-lg text-gray-100 font-medium flex-col'>
        <li2 className='flex flex-col gap-4 items-center'>
          <p>
            Ver descrição / notas de um jogo
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/notas')}>
            Clique
          </Button>
        </li2>
      </ul2>
      <ul3 className='flex gap-y-12 bg-slate-400 p-10 rounded-lg items-center text-lg text-gray-100 font-medium flex-col'>
        <li3 className='flex flex-col gap-4 items-center'>
          <p>
            Ver menor preço e histórico de preços na steam
          </p>
          <Button colorScheme='blue' className='w-fit' onClick={() => navigate('/historico')}>
            Clique
          </Button>
        </li3>
      </ul3>
    </div>
  )
}

export default Home
