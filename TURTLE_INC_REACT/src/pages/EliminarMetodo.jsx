import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/eliminar-metodo.css?raw';

export default function EliminarMetodo() {
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
      <PageStyle css={pageCss} title="Eliminar Método de Pago" />
      <header>
        <h1>Eliminar Método de Pago</h1>
    
    </header>

    <nav>
        <div className="logo">
            <a href="inicio.html">TURTLE INC</a>
        </div>

        <ul>
            <li><a href="inicio.html">Ultimos drops</a></li>
            <li><a href="caparazones.html">Caparazones</a></li>
            <li><a href="prendas.html">Prendas</a></li>
            <li><a href="perfil.html">Perfil</a></li>
        </ul>
    </nav>

    <main>

        <section className="contenedor">

            <img src="https://www.elpais.com.co/resizer/v2/IHQWMUXY2JCZBFPNHJ25HBMMOI.jpg?auth=d44315b6366fbec9ecec981ac4bcf171caace9840e13014765ef557bb9c91e66&smart=true&quality=75&width=1280&height=720" alt="Tarjeta" />

            <h2>¿Deseas eliminar este método de pago?</h2>

            <p>
                Al eliminar este método de pago ya no podrás utilizarlo para
                realizar compras en la plataforma.
            </p>

            <div className="tarjeta">

                <h3>Tarjeta registrada</h3>

                <p><strong>Tipo:</strong> Nequi</p>
                <p><strong>Número:</strong> **** **** **** 4589</p>
                <p><strong>Propietario:</strong> Santiago Osorno</p>

            </div>

            <div className="advertencia">
                ⚠ Esta acción no se puede deshacer.
            </div>

            <div className="botones">

                <button className="eliminar"
                    onClick={() => navigate('/ingresar-tarjeta.html')}>
                    Eliminar Método
                </button>

                <button className="cancelar"
                    onClick={() => navigate('/perfil.html')}>
                    Cancelar
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
