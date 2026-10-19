import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/carritotortugo.css?raw';

export default function CarritoTortugo() {
  const navigate = useNavigate();
  const precios = [199000, 69000];
  const [cantidades, setCantidades] = useState([1, 1]);
  const [eliminados, setEliminados] = useState([false, false]);

  const cambiarCantidad = (producto, cambio) => {
    setCantidades((prev) => {
      const next = [...prev];
      const nueva = next[producto] + cambio;
      next[producto] = nueva < 1 ? 1 : nueva;
      return next;
    });
  };

  const eliminarProducto = (indice) => {
    setEliminados((prev) => {
      const next = [...prev];
      next[indice] = true;
      return next;
    });
    setCantidades((prev) => {
      const next = [...prev];
      next[indice] = 0;
      return next;
    });
  };

  const total =
    (eliminados[0] ? 0 : precios[0] * cantidades[0]) +
    (eliminados[1] ? 0 : precios[1] * cantidades[1]);

  const guardarCarritoAntesDeComprar = (event) => {
    if (total === 0) {
      event.preventDefault();
      alert('Tu carrito está vacío. Agrega productos antes de continuar.');
      return;
    }

    const resumenCarrito = {
      total: total,
      cantidades: [
        eliminados[0] ? 0 : cantidades[0],
        eliminados[1] ? 0 : cantidades[1],
      ],
    };

    localStorage.setItem('carritoTurtle', JSON.stringify(resumenCarrito));
    navigate('/pedido.html');
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
      <PageStyle css={pageCss} title="Carrito Tortugo" />
      <header>
        <h1>TURTLE INC</h1>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="inicio.html">
            TURTLE INC
          </a>

          <div className="busqueda">
            <input type="text" id="buscar" placeholder="Buscar..." />
            <button onClick={buscarContenido}>🐢</button>
          </div>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="ultimos-drops.html">
                  Ultimos drops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="caparazones.html">
                  Caparazones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="prendas.html">
                  Prendas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="perfil.html">
                  Perfil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="carrito">
        <a href="prendas.html" className="volver">
          ‹ Back
        </a>

        <h2>Mis productos</h2>

        {/* PRODUCTO 1 */}
        {!eliminados[0] && (
          <div className="producto-carrito">
            <img src="/imagenes/camisa h (2).png" alt="Camiseta Turtle INC" />

            <div className="producto-info">
              <h3>Camiseta Turtle INC</h3>
              <p>Camiseta negra</p>
            </div>

            <div className="precio">$199.000</div>

            <div className="cantidad">
              <button onClick={() => cambiarCantidad(0, -1)}>-</button>
              <span id="cantidad0">{cantidades[0]}</span>
              <button onClick={() => cambiarCantidad(0, 1)}>+</button>
            </div>

            <button className="eliminar" onClick={() => eliminarProducto(0)}>
              x
            </button>
          </div>
        )}

        {/* PRODUCTO 2 */}
        {!eliminados[1] && (
          <div className="producto-carrito">
            <img src="/imagenes/topmujer.png" alt="Hoodie Turtle INC" />

            <div className="producto-info">
              <h3>Top mujer Turtle INC</h3>
              <p>Top mujer</p>
            </div>

            <div className="precio">$69.000</div>

            <div className="cantidad">
              <button onClick={() => cambiarCantidad(1, -1)}>-</button>
              <span id="cantidad1">{cantidades[1]}</span>
              <button onClick={() => cambiarCantidad(1, 1)}>+</button>
            </div>

            <button className="eliminar" onClick={() => eliminarProducto(1)}>
              x
            </button>
          </div>
        )}

        {/* TOTAL */}
        <div className="total">
          Total:{' '}
          <strong id="total">
            ${total.toLocaleString('es-CO')}
          </strong>
        </div>

        {/* BOTÓN FINALIZAR COMPRA */}
        <a href="pedido.html" onClick={guardarCarritoAntesDeComprar}>
          <button className="comprar">Finalizar compra 🐢</button>
        </a>
      </main>
    </>
  );
}
