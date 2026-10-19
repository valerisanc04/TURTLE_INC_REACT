import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/prendas.css?raw';

export default function Prendas() {
  const navigate = useNavigate();

  const buscarContenido = () => {
    const input = document.getElementById('buscar');
    const query = (input?.value || '').trim().toLowerCase();
    if (!query) return;

    if (query.includes('mujer') || query.includes('femenin')) {
      navigate('/prendasfemeninas.html');
    } else if (query.includes('hombre') || query.includes('masculin')) {
      navigate('/prendasmasculinas.html');
    } else if (query.includes('drop')) {
      navigate('/ultimos-drops.html');
    } else if (query.includes('caparazon')) {
      navigate('/caparazones.html');
    } else if (query.includes('carrito')) {
      navigate('/carritotortugo.html');
    } else if (query.includes('perfil')) {
      navigate('/perfil.html');
    } else if (query.includes('camisa')) {
      navigate('/camisaprueba1.html');
    } else if (query.includes('buzo') || query.includes('buso')) {
      navigate('/buzohombre.html');
    } else if (query.includes('zapato') || query.includes('tenis')) {
      navigate('/zapatoshombre.html');
    } else if (query.includes('falda')) {
      navigate('/faldamujer.html');
    } else if (query.includes('chaqueta')) {
      navigate('/chaquetamujer.html');
    } else if (query.includes('gorra')) {
      navigate('/gorrablanca.html');
    } else if (query.includes('gafa')) {
      navigate('/gafashombre.html');
    } else if (query.includes('jogger')) {
      navigate('/joggermujer.html');
    } else if (query.includes('pantaloneta')) {
      navigate('/pantalonetacasual.html');
    } else if (query.includes('top')) {
      navigate('/topmujerprueba.html');
    } else {
      navigate('/prendas.html');
    }
  };

  return (
    <>
      <PageStyle css={pageCss} title="Prendas" />
      <header>
        <h1>Prendas</h1>
    </header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            
            <a className="navbar-brand" href="inicio.html"> TURTLE INC</a>
            
            <div className="busqueda">
                <input type="text" id="buscar" placeholder="Buscar..." />
                <button onClick={buscarContenido}>🐢</button>
            </div>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="ultimos-drops.html">Ultimos drops</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="caparazones.html">Caparazones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="prendas.html">Prendas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="perfil.html">Perfil</a>
                    </li>
                    {/* Carrito dentro de la barra de navegación */}
                    <li className="nav-item">
                        <a href="carritotortugo.html" className="boton-carrito">🛒</a>   
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="Botones">
        <a href="prendasmasculinas.html" className="card-prenda">
            <img src="/imagenes/hombre prendas.PNG" alt="Prendas masculinas" />
            <div className="texto-boton">
                <h2>Prendas Masculinas</h2>
                <p>Ver colección masculina</p>
            </div>
        </a>

        <a href="prendasfemeninas.html" className="card-prenda">
            <img src="/imagenes/mujeres prendas.PNG" alt="Prendas femeninas" />
            <div className="texto-boton">
                <h2>Prendas Femeninas</h2>
                <p>Ver colección femenina</p>
            </div>
        </a>
    </div>

    <footer>
        <p>&copy; 2026 TURTLE INC. Todos los derechos reservados.</p>
    </footer>
    </>
  );
}
