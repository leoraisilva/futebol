import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Erro from './pages/Erro'

import Alemao from './pages/campeonatos/Alemao'
import BrasileiroA from './pages/campeonatos/BrasileiroA'
import BrasileiroB from './pages/campeonatos/BrasileiroB'
import Espanhol from './pages/campeonatos/Espanhol'
import Frances from './pages/campeonatos/Frances'
import Ingles from './pages/campeonatos/Ingles'
import Italiano from './pages/campeonatos/Italiano'
import Saudita from './pages/campeonatos/Saudita'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'campeonatos/bundesliga',           element: <Alemao />  },
      { path: 'campeonatos/brasileirao',          element: <BrasileiroA />  },
      { path: 'campeonatos/brasileirao-serie-b',  element: <BrasileiroB />  },
      { path: 'campeonatos/la-liga',              element: <Espanhol />  },
      { path: 'campeonatos/league-one',           element: <Frances />  },
      { path: 'campeonatos/premier-league',       element: <Ingles />  },
      { path: 'campeonatos/serie-a',              element: <Italiano />  },
      { path: 'campeonatos/saudita',              element: <Saudita /> },
    ]
  },
  { path: '*', element: <Erro />  }
])

export default router
