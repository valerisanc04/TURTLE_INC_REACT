import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/camisaprueba1.css?raw';

export default function ChaquetaMujer() {
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
      <PageStyle css={pageCss} title="Buzo Turtle Inc" />
      <header>
    <h1>CHAQUETA TURTLE INC</h1>
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
        <img src="/imagenes/chaquetita mujer.png" alt="Buzo" />
        <img src="/imagenes/chaquetitamujer.png" alt="Modelo" />
        <img src="/imagenes/modelo chaqueta.png" alt="Modelo" />
       
    </div>

    <div className="info">

        <p className="codigo">Item: 000229</p>

        <h1>Chaqueta TURTLE INC</h1>

        <h2>$219.000</h2>
        <hr />

        <p>El modelo tiene una talla S.</p>

        <div className="tallas">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            
        </div>
        
        <a href="carritotortugo.html"><button className="boton1">AGREGAR AL CARRITO</button></a>
        
       <a href="medidasmujeres.html"><button className="boton2" > MEDIDAS DE UNA TALLA</button></a>
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
        <p>Recibirás por tu compra 18 caparazones.</p>
    </div>

    <div className="card">
        <h3>Métodos de pago</h3>
        <p>Tarjeta de crédito, débito y contraentrega.</p>
    </div>

    <div className="card card-grande">
        <h3>Sobre el producto</h3>
        <p>
            Chaqueta estilo bomber con cierre frontal de cremallera, dobaldillo elastico
            diseñada para aportar un estilo oerno y abrigado
        </p>
    </div>

    <div className="card">
        <h3>Especificaciones</h3>
        <ul>
            <li>Algodón y poliéster</li>
            <li>Cierre con cremallera</li>
            <li>Corte estructurado/bomber</li>
            <li>Estampado Turtle Inc</li>
        </ul>
    </div>

    <div className="card">
        <h3>Composición y cuidados</h3>
        <ul>
            <li>Usa lavadora en ciclo delicado</li>
            <li>No usar blanqueador</li>
            <li>Usa agua fría</li>
        </ul>
    </div>

</div>
    </div>
    </section>
    </>
  );
}
