import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/perfil.css?raw';

export default function Perfil() {
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
      <PageStyle css={pageCss} title="Perfil de Usuario" />
      <header>
        <h1>Perfil de Usuario</h1>
    </header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="inicio.html">TURTLE INC</a>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="ultimos-drops.html">Últimos Drops</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="caparazones.html">Caparazones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="prendas.html">Prendas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="perfil.html">Perfil</a>
                    </li>
                    {/* Carrito integrado en la barra negra */}
                    <li className="nav-item">
                        <a href="carritotortugo.html" className="boton-carrito">🛒</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <section className="perfil-info">

            <h2>Información del Usuario</h2>

            <img src="https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
                alt="Avatar del usuario" width="120" height="120" />

            <h1>Datos de usuario</h1>

            <form>
                <label htmlFor="nombre">Nombre:</label><br />
                <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" /><br /><br />

                <label htmlFor="correo">Correo electrónico:</label><br />
                <input type="email" id="correo" name="correo" placeholder="Escribe tu correo" /><br /><br />
            </form>

            <div className="botones">
                <button onClick={() => navigate('/metodo-actual.html')}>
                    Método de pago actual
                </button>

                <button onClick={() => navigate('/eliminar-metodo.html')}>
                    Eliminar método de pago
                </button>

                <button onClick={() => navigate('/verificar.html')}>
                    Verificar método de pago
                </button>
            </div>

        </section>
    </main>

    <footer>
        <p>&copy; 2026 TURTLE INC. Todos los derechos reservados.</p>
    </footer>
    </>
  );
}
