import { Link, Outlet } from 'react-router-dom/'

function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to='/campeonatos/bundesliga'>Bundesliga</Link></li>
            <li><Link to='/campeonatos/brasileirao'>Brasileirão - Série A</Link></li>
            <li><Link to='/campeonatos/brasileirao-serie-b'>Brasileirão - Série B</Link></li>
            <li><Link to='/campeonatos/la-liga'>La Liga</Link></li>
            <li><Link to='/campeonatos/league-one'>League One</Link></li>
            <li><Link to='/campeonatos/premier-league'>Premier League</Link></li>
            <li><Link to='/campeonatos/serie-a'>Serie A</Link></li>
            <li><Link to='/campeonatos/saudita'>Saudita</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Home
