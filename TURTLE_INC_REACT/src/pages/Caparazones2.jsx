import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/caparazones2.css?raw';

export default function Caparazones2() {
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const buscarContenido = () => {
    const input = document.getElementById('buscar');
    const query = (input?.value || '').trim().toLowerCase();
    if (!query) return;
    if (query.includes('mujer')) navigate('/prendasfemeninas.html');
    else if (query.includes('hombre')) navigate('/prendasmasculinas.html');
    else if (query.includes('drop')) navigate('/ultimos-drops.html');
    else if (query.includes('caparazon')) navigate('/caparazones.html');
    else navigate('/prendas.html');
  };

  return (
    <>
      <PageStyle css={pageCss} title="Caparazones | Turtle Inc" />
      <nav>
        <h2><a href="inicio.html" className="logo">TURTLE INC</a></h2>

        <div className="busqueda">
          <input type="text" id="buscar" placeholder="Buscar..." />
          <button onClick={buscarContenido}>🐢</button>
        </div>

        <ul>
          <li><a href="ultimos-drops.html">Ultimos drops</a></li>
          <li><a href="caparazones.html">Caparazones</a></li>
          <li><a href="prendas.html">Prendas</a></li>
          <li><a href="perfil.html">Perfil</a></li>
          <li><a href="carritotortugo.html" className="boton-carrito">🛒</a></li>
        </ul>
      </nav>

      <main>
        <h1>Bienvenido a Caparazones</h1>
        <div className="parrafos">
          <p>Los Caparazones son el sistema de recompensas de Turtle Inc.</p>
          <p>Cada compra suma puntos que podrás cambiar por descuentos exclusivos.</p>
        </div>

        <h1 style={{ marginTop: '40px' }}>RECOMPENSAS</h1>

        <div className="recompensas">
          <div className="card">
            <h2>25% DE DESCUENTO</h2>
            <h3>100 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>Canjear</button>
          </div>

          <div className="card">
            <h2>50% DE DESCUENTO</h2>
            <h3>200 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>Canjear</button>
          </div>

          <div className="card">
            <h2>75% DE DESCUENTO</h2>
            <h3>350 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>Canjear</button>
          </div>

          <div className="card">
            <h2>99% DE DESCUENTO</h2>
            <h3>666 Caparazones</h3>
            <button className="btn-canjear" onClick={abrirModal}>Canjear</button>
          </div>
        </div>
      </main>

      <div className="info">
        <footer>
          &copy; 2026 TURTLE INC. Todos los derechos reservados.
        </footer>
      </div>

      {/* VENTANA EMERGENTE (MODAL) */}
      <div
        id="modal-canje"
        className="modal-overlay"
        style={{ display: modalAbierto ? 'flex' : 'none' }}
      >
        <div className="modal-contenido">
          <div className="modal-icono">
            <span>✓</span>
          </div>
          <span className="modal-subtitulo">TURTLE INC</span>
          <h2 className="modal-titulo">¡Caparazones canjeados!</h2>
          <p className="modal-texto">
            Tus caparazones han sido canjeados con éxito.<br />
            <strong>Turtle Inc 🐢</strong>
          </p>
          <button className="btn-aceptar" onClick={cerrarModal}>Aceptar</button>
        </div>
      </div>
    </>
  );
}
