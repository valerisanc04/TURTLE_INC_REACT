import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/prendasfemeninas.css?raw';

export default function PrendasFemeninas() {
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
      <PageStyle css={pageCss} title="Prendas Femeninas" />
      <header>
        <h1>Prendas Femeninas</h1>
    </header>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            
            <a className="navbar-brand" href="inicio.html">TURTLE INC</a>

            <div className="busqueda">
                <input type="text" id="buscar" placeholder="Buscar..." />
                <button onClick={buscarContenido}>🐢</button>
            </div>
            
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
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
                    {/* CARRITO MOVIDO AQUÍ PARA QUE APAREZCA EN LA BARRA NEGRA */}
                    <li className="nav-item item-carrito">
                        <a href="carrito.html" className="boton-carrito" title="Carrito">🛒</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav> 

    <section className="productos">
        {/* Fila 1 (Primeras 4 prendas) */}
        <div className="producto">
            <a href="topmujerprueba.html">
                <img src="/imagenes/topmujer.png" alt="Top Mujer Turtle Inc" />
                <h3>Top Mujer Turtle Inc</h3>
                <p className="precio">$69.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="buzorosamujer.html">
                <img src="/imagenes/buzo rosa 4.png" alt="Buzo rosa Turtle Inc" />
                <h3>Buzo rosa Turtle Inc</h3>
                <p className="precio">$189.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="buzooversizemujer.html">
                <img src="/imagenes/buso mujer 2.png" alt="Buzo Oversize Mujer Turtle Inc" />
                <h3>Buzo Oversize Mujer Turtle Inc</h3>
                <p className="precio">$199.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="joggermujer.html">
                <img src="/imagenes/jogger mujer.png" alt="Jogger Mujer Turtle Inc" />
                <h3>Jogger Mujer Turtle Inc</h3>
                <p className="precio">$99.000</p>
            </a>
        </div>

        {/* Fila 2 (Siguientes 4 prendas) */}
        <div className="producto">
            <a href="topblanco.html">
                <img src="/imagenes/top blanco mujer.png" alt="Top Blanco Turtle Inc" />
                <h3>Top Blanco Turtle Inc</h3>
                <p className="precio">$69.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="chaquetamujer.html">
                <img src="/imagenes/chaquetita mujer.png" alt="Chaqueta Turtle Inc" />
                <h3>Chaqueta Turtle Inc</h3>
                <p className="precio">$219.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="faldamujer.html">
                <img src="/imagenes/falda verde mujer.png" alt="Falda Turtle Inc" />
                <h3>Falda Turtle Inc</h3>
                <p className="precio">$149.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="vestidodebaño.html">
                <img src="/imagenes/traje de baño.png" alt="Vestido de Baño Turtle Inc" />
                <h3>Vestido de Baño Turtle Inc</h3>
                <p className="precio">$199.000</p>
            </a>
        </div>
    </section>

    <div className="info">
        <footer>
            &copy; 2026 TURTLE INC. Todos los derechos reservados.
        </footer>
    </div>
    </>
  );
}
