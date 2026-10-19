import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/registrousuario.css?raw';

export default function RegistroUsuario() {
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
      <PageStyle css={pageCss} title="Registrar usuario" />
      <div className="registro">

        <h1>Crear cuenta</h1>
        <p className="subtitulo">Regístrate en Turtle Inc.</p>

        <form action="#" method="post">

            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"
                   placeholder="Ingresa tu nombre" required />

            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido"
                   placeholder="Ingresa tu apellido" required />

            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo"
                   placeholder="correo@ejemplo.com" required />

            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono"
                   placeholder="Ingresa tu teléfono" required />

            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input type="date" id="fecha" name="fecha" required />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password"
                   placeholder="Crea una contraseña" required />

            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input type="password" id="confirmar" name="confirmar"
                   placeholder="Repite tu contraseña" required />

            <div className="terminos">
                <input type="checkbox" id="terminos" required />
                <label htmlFor="terminos">Acepto los términos y condiciones</label>
            </div>

            <button type="submit"><a href="inicio.html">Registrarme</a></button>

        </form>

        <p className="login">
            ¿Ya tienes una cuenta?
            <a href="registro.html">Iniciar sesión</a>
        </p>

    </div>
    </>
  );
}
