import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCssRaw from '../CSS/pedido.css?raw';

const modalCss = `
.mensaje-no-seguimiento {
    position: fixed;
    inset: 0;
    background: rgba(35, 45, 50, 0.60);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
}
.mensaje-no-seguimiento.oculto {
    display: none;
}
.tarjeta-mensaje {
    width: 360px;
    max-width: 100%;
    background: white;
    border-radius: 28px;
    padding: 35px 25px;
    text-align: center;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);
    animation: aparecer .35s ease;
}
@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(25px) scale(.94);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
.icono-mensaje {
    width: 75px;
    height: 75px;
    margin: 0 auto 18px;
    border-radius: 50%;
    background: #e3f6eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
}
.tarjeta-mensaje .marca {
    color: #35a976;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 8px;
}
.tarjeta-mensaje h2 {
    color: #46535e;
    font-size: 25px;
    margin-bottom: 15px;
}
.tarjeta-mensaje p {
    color: #89959d;
    font-size: 14px;
    line-height: 1.7;
}
.tarjeta-mensaje p strong {
    color: #35a976;
}
.boton-mensaje {
    width: 100%;
    margin-top: 23px;
    padding: 14px;
    border: none;
    border-radius: 13px;
    background: #46535e;
    color: white;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: .2s;
}
.boton-mensaje:hover {
    background: #35414a;
    transform: translateY(-2px);
}
`;

const combinedCss = pageCssRaw + '\n' + modalCss;

export default function Pedido() {
  const navigate = useNavigate();
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [api, setApi] = useState('');
  const [aviso, setAviso] = useState('si');
  const [seguimiento, setSeguimiento] = useState('si');
  const [mensajeNoVisible, setMensajeNoVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const datosPedido = {
      direccion: direccion.trim(),
      telefono: telefono.trim(),
      api: api.trim(),
      aviso: aviso,
      seguimiento: seguimiento,
    };

    localStorage.setItem('turtlePedido', JSON.stringify(datosPedido));

    if (seguimiento === 'si') {
      navigate('/seguimiento.html');
      return;
    }

    if (seguimiento === 'no') {
      setMensajeNoVisible(true);
    }
  };

  const cerrarMensaje = () => {
    setMensajeNoVisible(false);
  };

  return (
    <>
      <PageStyle css={combinedCss} title="Datos para el pedido | Turtle Inc" />
      <main className="contenedor">
        {/* BOTÓN BACK */}
        <a href="inicio.html" className="volver">
          ‹ Back
        </a>

        <h1>Datos para el pedido</h1>

        <form id="formPedido" onSubmit={handleSubmit}>
          {/* DIRECCIÓN */}
          <div className="campo">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Ingresa tu dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>

          {/* TELÉFONO */}
          <div className="campo">
            <label htmlFor="telefono">Número de teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ingresa tu teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          {/* API */}
          <div className="campo api">
            <label htmlFor="api">
              API <span>(opcional)</span>
            </label>
            <input
              type="text"
              id="api"
              name="api"
              placeholder="Opcional"
              value={api}
              onChange={(e) => setApi(e.target.value)}
            />
          </div>

          {/* AVISO */}
          <div className="opcion">
            <h2>Avisar cuando mi pedido sea enviado</h2>
            <div className="botones">
              <label>
                <input
                  type="radio"
                  name="aviso"
                  value="si"
                  checked={aviso === 'si'}
                  onChange={() => setAviso('si')}
                  required
                />
                <span>Sí</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="aviso"
                  value="no"
                  checked={aviso === 'no'}
                  onChange={() => setAviso('no')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* SEGUIMIENTO */}
          <div className="opcion">
            <h2>Seguir mi pedido</h2>
            <div className="botones">
              <label>
                <input
                  type="radio"
                  name="seguimiento"
                  value="si"
                  checked={seguimiento === 'si'}
                  onChange={() => setSeguimiento('si')}
                  required
                />
                <span>Sí</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="seguimiento"
                  value="no"
                  checked={seguimiento === 'no'}
                  onChange={() => setSeguimiento('no')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* CONTINUAR */}
          <button type="submit" className="continuar">
            Continuar
          </button>
        </form>
      </main>

      {/* MENSAJE SI ELIGE NO */}
      <div
        id="mensajeNo"
        className={`mensaje-no-seguimiento ${mensajeNoVisible ? '' : 'oculto'}`}
      >
        <div className="tarjeta-mensaje">
          <div className="icono-mensaje">🐢</div>

          <p className="marca">TURTLE INC</p>

          <h2>¡Pedido confirmado!</h2>

          <p>
            Esperamos que tu pedido
            <br />
            llegue bien hasta tu puerta.
            <br />
            <br />
            <strong>¡Gracias por confiar en nosotros!</strong>
          </p>

          <button
            className="boton-mensaje"
            id="cerrarMensaje"
            type="button"
            onClick={cerrarMensaje}
          >
            Aceptar
          </button>
        </div>
      </div>
    </>
  );
}
