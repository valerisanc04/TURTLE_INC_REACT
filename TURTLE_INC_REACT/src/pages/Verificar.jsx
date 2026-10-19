import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/verificar.css?raw';

export default function Verificar() {
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
      <PageStyle css={pageCss} title="Verificar Método de Pago" />
      <header>
    <h1>Verificar Método de Pago</h1>
</header>

<nav>
    <div className="logo">
        <a href="inicio.html">TURTLE INC</a>
    </div>

    <ul>
        <li><a href="inicio.html">Inicio</a></li>
        <li><a href="caparazones.html">Caparazones</a></li>
        <li><a href="prendas.html">Prendas</a></li>
        <li><a href="perfil.html">Perfil</a></li>
    </ul>
</nav>

<main>

<section className="contenedor">

    <h2>Verificación de Pago</h2>

    <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
         alt="Verificación" />

    <p>
        Ingresa el código de verificación enviado a tu método de pago.
    </p>

    <form>

        <label>Código de verificación</label>

        <input
        type="text"
        placeholder="Ejemplo: 123456"
        maxlength="6"
        required />

        <button type="submit">
            Verificar
        </button>

    </form>

    <br />

    <button className="volver"
    onClick={() => navigate('/metodo-actual.html')}>
        Volver
    </button>

</section>

</main>

<footer>
    © 2026 TURTLE INC. Todos los derechos reservados.
</footer>
    </>
  );
}
