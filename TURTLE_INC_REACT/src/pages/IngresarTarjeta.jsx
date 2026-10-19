import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/ingresar-tarjeta.css?raw';

export default function IngresarTarjeta() {
  const navigate = useNavigate();
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const mostrarMensaje = () => {
    setMensajeVisible(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 50);
  };

  return (
    <>
      <PageStyle css={pageCss} title="Ingresar Nueva Tarjeta" />
      <header>
        <h1>Registrar Nueva Tarjeta</h1>
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
          <img
            src="https://m.media-amazon.com/images/I/81GC5kmCelL._AC_UY350_.jpg"
            alt="medidas-de-tallas"
          />

          <h2>Agregar Nuevo Método de Pago</h2>

          <p>
            Ingresa los datos de tu nueva tarjeta para continuar realizando tus
            compras de forma segura.
          </p>

          <form>
            <label>Número de tarjeta</label>
            <input type="text" placeholder="1234 5678 9012 3456" />

            <label>Nombre del titular</label>
            <input type="text" placeholder="Nombre completo" />

            <div className="fila">
              <div className="campo">
                <label>Fecha de vencimiento</label>
                <input type="text" placeholder="MM/AA" />
              </div>

              <div className="campo">
                <label>CVV</label>
                <input type="password" placeholder="123" />
              </div>
            </div>

            <button type="button" onClick={mostrarMensaje}>
              Guardar Tarjeta
            </button>

            <button
              type="button"
              className="volver"
              onClick={() => navigate('/perfil.html')}
            >
              Volver al Perfil
            </button>
          </form>

          <div
            id="mensaje"
            className="mensaje-exito"
            style={{ display: mensajeVisible ? 'block' : 'none' }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="Correcto"
            />

            <h3>¡Tu tarjeta ha sido guardada!</h3>

            <p>
              Tu nuevo método de pago fue registrado correctamente.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 TURTLE INC. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
