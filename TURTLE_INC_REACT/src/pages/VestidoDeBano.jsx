import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/camisaprueba1.css?raw';

export default function VestidoDeBano() {
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
      <PageStyle css={pageCss} title="Vestido de baño Turtle Inc" />
      <header>
    <h1>Vestido de baño Turtle Inc</h1>
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
                </ul>
                
            </div>
    </div>
</nav> 
    <section className="detalle-producto">

    <div className="galeria">
        <img src="/imagenes/traje de baño.png" alt="Vestido de Baño" />
        <img src="/imagenes/traje de baño 2.png" alt="Modelo" />
        
    </div>

    <div className="info">

        <p className="codigo">Item: 00043</p>

        <h1>VESTIDO DE BAÑO TURTLE INC</h1>

        <h2>$199.000</h2>
        <hr />

        <p>El modelo tiene una talla M.</p>

        <div className="tallas">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            
        </div>
        
        <a href="carritotortugo.html"><button className="boton1">AGREGAR AL CARRITO</button></a>
        
       
    <div className="beneficios">

    <div className="card">
        <h3>Envíos gratis</h3>
        <p>Aplica para la ropa sin descuentos.</p>
    </div>

    <div className="card">
        <h3>Llega en 7 días</h3>
        <p>Solo 7 días hábiles para ciudades principales.</p>
    </div>

    <div className="card">
        <h3>Caparazones</h3>
        <p>Recibirás por tu compra 15 caparazones.</p>
    </div>

    <div className="card">
        <h3>Métodos de pago</h3>
        <p>Tarjeta de crédito, débito y contraentrega.</p>
    </div>

    <div className="card card-grande">
        <h3>Sobre el producto</h3>
        <p>
           Vestido de baño de mujer Turtle Inc, diseñado para combinar comodidad y estilo. Su diseño moderno y urbano representa la esencia de Turtle Inc y es ideal para disfrutar de días de piscina o playa.
        </p>
    </div>

    <div className="card">
        <h3>Especificaciones</h3>
        <ul>
            <li>Elastano y poliéster</li>
            <li>Comodo y flexible</li>
            <li>Estampado Turtle Inc</li>
        </ul>
    </div>

    <div className="card">
        <h3>Composición y cuidados</h3>
        <ul>
            <li>Lavar a mano o en ciclo delicado </li>
            <li>No usar blanqueador</li>
            <li>Enjuagar con agua fría despues de usar</li>
            <li>No planchar</li>
        </ul>
    </div>

</div>
    </div>
    </section>
    </>
  );
}
