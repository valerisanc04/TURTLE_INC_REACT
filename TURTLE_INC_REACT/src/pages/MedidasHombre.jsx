import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/medidashombre.css?raw';

export default function MedidasHombre() {
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
      <PageStyle css={pageCss} title="Medidas Hombre" />
      <header>
        <h1>Medidas Hombre</h1>
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
                    {/* Carrito dentro del menú */}
                    <li className="nav-item">
                        <a href="carritotortugo.html" className="boton-carrito">🛒</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <a href="prendasfemeninas.html" onClick={() => window.history.back()} className="volver">‹ Back</a>

    <section className="guia-medidas">

        <h2>GUÍA DE MEDIDAS</h2>

        <div className="imagen-guia">
            <img src="/imagenes/medidas.PNG" alt="Guía de medidas" />
        </div>

        <table>
            <thead>
                <tr>
                    <th>Talla</th>
                    <th>Ancho Pecho</th>
                    <th>Longitud Manga</th>
                    <th>Longitud Frente</th>
                    <th>Hombro</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>S</td>
                    <td>56.5</td>
                    <td>21</td>
                    <td>73</td>
                    <td>19.5</td>
                </tr>

                <tr>
                    <td>M</td>
                    <td>58.5</td>
                    <td>22</td>
                    <td>75</td>
                    <td>20.5</td>
                </tr>

                <tr>
                    <td>L</td>
                    <td>60.5</td>
                    <td>23</td>
                    <td>77</td>
                    <td>20.5</td>
                </tr>

                <tr>
                    <td>XL</td>
                    <td>62.5</td>
                    <td>23.5</td>
                    <td>79</td>
                    <td>21.5</td>
                </tr>
            </tbody>

        </table>

    </section>

    <footer>
        <p>&copy; 2026 TURTLE INC. Todos los derechos reservados.</p>
    </footer>
    </>
  );
}
