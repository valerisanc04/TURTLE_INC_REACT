import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageStyle from '../components/PageStyle';
import pageCss from '../CSS/olvidastecontraseña.css?raw';

export default function NuevaContrasena() {
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
      <PageStyle css={pageCss} title="Olvidaste tu contraseña" />
      <div className="dropdown-menu">
  <form className="px-4 py-3">
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormEmail1" className="form-label">Nueva contraseña </label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
    </div>
    
     <div className="mb-3">
      <label htmlFor="exampleDropdownFormPassword1" className="form-label">Confirmar contraseña</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
    </div>
    <div className="mb-3">
    </div>
    <button type="submit" className="btn btn-primary"><a href="inicio.html" style={{"color":"black"}}>Cambiar contraseña</a></button>
  </form>
</div>
    </>
  );
}
