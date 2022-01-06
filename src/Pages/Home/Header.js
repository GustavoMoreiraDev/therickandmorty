import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Rick And Morty</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-md-0"> 
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='Inicio'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='Sobre'>Sobre</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="Episodios">Episodios</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header