import { Link, Outlet } from 'react-router-dom/'
import Nav from './components/Nav/nav'
import '../pages/home.css'

function Home() {
  return (
    <>
      <header>
        <Nav Bundesliga={'Bundesliga'} BrasileiraoA={'Brasileirão - Série A'} BrasileiraoB={'Brasileirão - Série B'} LaLiga={'La Liga'} LeagueOne={'League One'} PremierLeague={'Premier League'} SerieA={'Serie A'} Saudita={'Saudita'} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Home
