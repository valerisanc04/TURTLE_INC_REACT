import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/metodo-actual.css?raw';

export default function MetodoActual() {
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
      <PageStyle css={pageCss} title="Método de Pago" />
      <header>
    <h1>Método de Pago</h1>
</header>

<nav>
    <div className="logo">
        <a href="inicio.html">TURTLE INC</a>
    </div>

    <ul>
        <li><a href="ultimos-drops.html">Últimos Drops</a></li>
        <li><a href="caparazones.html">Caparazones</a></li>
        <li><a href="prendas.html">Prendas</a></li>
        <li><a href="perfil.html">Perfil</a></li>
    </ul>
</nav>

<main>

<section className="contenedor">

    <h2>Método de Pago Actual</h2>

    <div className="tarjeta">

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNGdbqsun1jR_HaStAiMjCxRHj68WLGTl3-_5574erg&s=10" alt="Nequi" />

        <div className="datos">
            <p><strong>Tipo:</strong> Nequi</p>
            <p><strong>Titular:</strong> Usuario</p>
            <p><strong>Número:</strong> **** **** **** 4589</p>
            <p><strong>Vence:</strong> 08/29</p>
        </div>

    </div>

    <div className="acciones">

        <button onClick={() => navigate('/verificar.html')}>
            Verificar tarjeta
        </button>

        <button onClick={() => navigate('/eliminar-metodo.html')}>
            Eliminar tarjeta
        </button>

        <button onClick={() => navigate('/ingresar-tarjeta.html')}>
            Agregar nueva tarjeta
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
