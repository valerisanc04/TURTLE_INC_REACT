import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/seguimiento.css?raw';

export default function Seguimiento() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({});
  const [entregado, setEntregado] = useState(false);

  useEffect(() => {
    try {
      const guardado = JSON.parse(localStorage.getItem('turtlePedido') || '{}');
      setDatos(guardado);
    } catch {
      setDatos({});
    }
  }, []);

  const marcarLlegada = () => {
    setEntregado(true);
  };

  const cerrarMensaje = () => {
    localStorage.removeItem('turtlePedido');
    navigate('/inicio.html');
  };

  return (
    <>
      <PageStyle css={pageCss} title="Seguimiento de tu pedido | Turtle Inc" />
      <main className="telefono">
        <div className="barra-superior">
          <a href="pedido.html">‹ Back</a>
          <span>9:41</span>
        </div>

        <section className="contenido">
          <div className="tortuga">🐢</div>

          <p className="marca">TURTLE INC</p>

          <h1>
            SEGUIMIENTO<br />
            DE TU PEDIDO
          </h1>

          {/* MAPA */}
          <div className="mapa" aria-label="Mapa de seguimiento">
            <div className="ruta"></div>
            <div className="pin">●</div>
            <div className="punto p1"></div>
            <div className="punto p2"></div>
            <div className="punto p3"></div>
          </div>

          {/* ESTADO */}
          <div className="estado">
            <span
              className={`pulso ${entregado ? 'completo' : ''}`}
              id="pulso"
            ></span>

            <div>
              <strong
                id="estadoTexto"
                style={{ color: entregado ? '#299367' : undefined }}
              >
                {entregado ? '¡Tu pedido ya llegó!' : 'Tu pedido está en camino'}
              </strong>

              <small id="direccionTexto">
                {datos.direccion
                  ? 'Entregando en: ' + datos.direccion
                  : 'Preparando la entrega...'}
              </small>
            </div>
          </div>

          {/* PROGRESO */}
          <div className="progreso">
            <div className="linea"></div>

            <div className="paso activo">
              <span>✓</span>
              <small>
                Pedido<br />
                confirmado
              </small>
            </div>

            <div className="paso activo">
              <span>✓</span>
              <small>En camino</small>
            </div>

            <div className={`paso ${entregado ? 'activo' : ''}`}>
              <span>{entregado ? '✓' : '3'}</span>
              <small>Entregado</small>
            </div>
          </div>

          {/* BOTÓN */}
          <button id="llegoBtn" className="llego" onClick={marcarLlegada}>
            YA LLEGÓ MI PEDIDO
          </button>

          <button
            className="volver-pedido"
            onClick={() => navigate('/pedido.html')}
          >
            ← Volver a mis datos
          </button>
        </section>
      </main>

      {/* MENSAJE FINAL */}
      <div
        id="mensajeFinal"
        className={`modal ${entregado ? '' : 'oculto'}`}
      >
        <div className="celebracion">
          <div className="check">✓</div>

          <p className="marca">TURTLE INC</p>

          <h2>¡Pedido entregado!</h2>

          <p>
            Gracias por confiar en nosotros,
            <br />
            esperamos te guste tu pedido
            <br />
            <strong>Turtle Inc</strong> 🐢
          </p>

          {/* ESTE BOTÓN TE LLEVA A INICIO.HTML */}
          <button onClick={cerrarMensaje}>Aceptar</button>
        </div>
      </div>
    </>
  );
}
