import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/prendasmasculinas.css?raw';

export default function PrendasMasculinas() {
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
      <PageStyle css={pageCss} title="Prendas Masculinas" />
      <header>
        <h1>Prendas Masculinas</h1>
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
                    {/* CARRITO ALINEADO A LA DERECHA */}
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
            <a href="camisaprueba1.html">
                <img src="/imagenes/camisa h (2).png" alt="Camiseta Hombre Turtle Inc" />
                <h3>Camiseta Hombre Turtle Inc</h3>
                <p className="precio">$199.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="buzohombre.html">
                <img src="/imagenes/buso v 1.png" alt="Buzo Turtle Inc" />
                <h3>Buzo Turtle Inc</h3>
                <p className="precio">$259.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="zapatoshombre.html">
                <img src="/imagenes/tenis 4.png" alt="Zapatos Hombre Turtle Inc" />
                <h3>Zapatos Urbanos Turtle Inc</h3>
                <p className="precio">$299.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="conjuntohombrebuzoysudadera.html">
                <img src="/imagenes/conjunto hombre 12.png" alt="Conjunto Turtle Inc" />
                <h3>Conjunto Turtle Inc</h3>
                <p className="precio">$379.000</p>
            </a>
        </div>

        {/* Fila 2 (Siguientes 4 prendas) */}
        <div className="producto">
            <a href="gorrablanca.html">
                <img src="/imagenes/g (2).jpeg" alt="Pantalón Turtle Inc" />
                <h3>Pantalón Turtle Inc</h3>
                <p className="precio">$180.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="buzooscurohombre.html">
                <img src="/imagenes/buso 1.png" alt="Camisa Manga Larga Turtle Inc" />
                <h3>Camisa Manga Larga</h3>
                <p className="precio">$210.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="gafashombre.html">
                <img src="/imagenes/gafa1.png" alt="Gafas Turtle Inc" />
                <h3>Gafas Turtle Inc</h3>
                <p className="precio">$499.000</p>
            </a>
        </div>

        <div className="producto">
            <a href="pantalonetacasual.html">
                <img src="/imagenes/pantaloneta 1.png" alt="Pantaloneta Casual Turtle Inc" />
                <h3>Pantaloneta Casual Turtle Inc</h3>
                <p className="precio">$79.000</p>
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
