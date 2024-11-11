import { Link } from "react-router-dom";

interface campeonato {
    Bundesliga: string,
    BrasileiraoA: string,
    BrasileiraoB: string,
    LaLiga: string,
    LeagueOne: string,
    PremierLeague : string,
    SerieA: string,
    Saudita: string
};

function Nav({Bundesliga, BrasileiraoA, BrasileiraoB, LaLiga, LeagueOne, PremierLeague, SerieA, Saudita} : campeonato) {
    return (
        <>
       <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Esportes Interativos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Campeonatos</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link to='/campeonatos/brasileirao' className="nav-link active" aria-current="page">{BrasileiraoA}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/campeonatos/brasileirao-serie-b' className="nav-link active" aria-current="page">{BrasileiraoB}</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Internacionais
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link to='/campeonatos/premier-league' className="dropdown-item">{PremierLeague}</Link></li>
                            <li><Link to='/campeonatos/la-liga' className="dropdown-item">{LaLiga}</Link></li>
                            <li><Link to='/campeonatos/serie-a' className="dropdown-item">{SerieA}</Link></li>
                            <li><Link to='/campeonatos/bundesliga' className="dropdown-item">{Bundesliga}</Link></li>
                            <li><Link to='/campeonatos/league-one' className="dropdown-item">{LeagueOne}</Link></li>
                            <li><Link to='/campeonatos/saudita' className="dropdown-item">{Saudita}</Link></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Nav;