import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationHandler from './components/NavigationHandler';

import Inicio from './pages/Inicio';
import UltimosDrops from './pages/UltimosDrops';
import Prendas from './pages/Prendas';
import PrendasMasculinas from './pages/PrendasMasculinas';
import PrendasFemeninas from './pages/PrendasFemeninas';
import Caparazones from './pages/Caparazones';
import Caparazones2 from './pages/Caparazones2';
import Perfil from './pages/Perfil';
import Registro from './pages/Registro';
import RegistroUsuario from './pages/RegistroUsuario';
import OlvidasteContrasena from './pages/OlvidasteContrasena';
import NuevaContrasena from './pages/NuevaContrasena';
import Verificar from './pages/Verificar';
import MetodoActual from './pages/MetodoActual';
import IngresarTarjeta from './pages/IngresarTarjeta';
import EliminarMetodo from './pages/EliminarMetodo';
import MedidasHombre from './pages/MedidasHombre';
import MedidasMujeres from './pages/MedidasMujeres';
import CarritoTortugo from './pages/CarritoTortugo';
import Pago from './pages/Pago';
import Pedido from './pages/Pedido';
import Seguimiento from './pages/Seguimiento';
import BuzoHombre from './pages/BuzoHombre';
import BuzoOscuroHombre from './pages/BuzoOscuroHombre';
import BuzoOversizeMujer from './pages/BuzoOversizeMujer';
import BuzoRosaMujer from './pages/BuzoRosaMujer';
import CamisaPrueba1 from './pages/CamisaPrueba1';
import ChaquetaMujer from './pages/ChaquetaMujer';
import ConjuntoHombreBuzoYSudadera from './pages/ConjuntoHombreBuzoYSudadera';
import FaldaMujer from './pages/FaldaMujer';
import GafasHombre from './pages/GafasHombre';
import GorraBlanca from './pages/GorraBlanca';
import JoggerMujer from './pages/JoggerMujer';
import PantalonetaCasual from './pages/PantalonetaCasual';
import TopBlanco from './pages/TopBlanco';
import TopMujerPrueba from './pages/TopMujerPrueba';
import VestidoDeBano from './pages/VestidoDeBano';
import ZapatosHombre from './pages/ZapatosHombre';

export default function App() {
  return (
    <BrowserRouter>
      <NavigationHandler />
      <Routes>
        {/* Inicio */}
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio.html" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />

        {/* Ultimos drops */}
        <Route path="/ultimos-drops.html" element={<UltimosDrops />} />
        <Route path="/Ultimos-drops.html" element={<UltimosDrops />} />
        <Route path="/ultimos-drops" element={<UltimosDrops />} />

        {/* Prendas */}
        <Route path="/prendas.html" element={<Prendas />} />
        <Route path="/prendas" element={<Prendas />} />
        <Route path="/prendasmasculinas.html" element={<PrendasMasculinas />} />
        <Route path="/prendasmasculinas" element={<PrendasMasculinas />} />
        <Route path="/prendasfemeninas.html" element={<PrendasFemeninas />} />
        <Route path="/prendasfemeninas" element={<PrendasFemeninas />} />

        {/* Caparazones */}
        <Route path="/caparazones.html" element={<Caparazones />} />
        <Route path="/caparazones" element={<Caparazones />} />
        <Route path="/caparazones2.html" element={<Caparazones2 />} />
        <Route path="/caparazones2" element={<Caparazones2 />} />

        {/* Perfil y Métodos de pago */}
        <Route path="/perfil.html" element={<Perfil />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/metodo-actual.html" element={<MetodoActual />} />
        <Route path="/metodo-actual" element={<MetodoActual />} />
        <Route path="/ingresar-tarjeta.html" element={<IngresarTarjeta />} />
        <Route path="/ingresar-tarjeta" element={<IngresarTarjeta />} />
        <Route path="/eliminar-metodo.html" element={<EliminarMetodo />} />
        <Route path="/eliminar-metodo" element={<EliminarMetodo />} />
        <Route path="/verificar.html" element={<Verificar />} />
        <Route path="/verificar" element={<Verificar />} />

        {/* Autenticación y Registro */}
        <Route path="/registro.html" element={<Registro />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registrousuario.html" element={<RegistroUsuario />} />
        <Route path="/registrousuario" element={<RegistroUsuario />} />
        <Route path="/olvidastecontraseña.html" element={<OlvidasteContrasena />} />
        <Route path="/olvidastecontrase%C3%B1a.html" element={<OlvidasteContrasena />} />
        <Route path="/olvidastecontrasena" element={<OlvidasteContrasena />} />
        <Route path="/nuevacontraseña.html" element={<NuevaContrasena />} />
        <Route path="/nuevacontrase%C3%B1a.html" element={<NuevaContrasena />} />
        <Route path="/nuevacontrasena" element={<NuevaContrasena />} />

        {/* Guías de medidas */}
        <Route path="/medidashombre.html" element={<MedidasHombre />} />
        <Route path="/medidashombre" element={<MedidasHombre />} />
        <Route path="/medidasmujeres.html" element={<MedidasMujeres />} />
        <Route path="/medidasmujer.html" element={<MedidasMujeres />} />
        <Route path="/medidasmujeres" element={<MedidasMujeres />} />

        {/* Carrito y Compra */}
        <Route path="/carritotortugo.html" element={<CarritoTortugo />} />
        <Route path="/carritotortugo" element={<CarritoTortugo />} />
        <Route path="/carrito.html" element={<CarritoTortugo />} />
        <Route path="/carrito" element={<CarritoTortugo />} />
        <Route path="/pago.html" element={<Pago />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/pedido.html" element={<Pedido />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/seguimiento.html" element={<Seguimiento />} />
        <Route path="/seguimiento" element={<Seguimiento />} />

        {/* Productos Detalle */}
        <Route path="/buzohombre.html" element={<BuzoHombre />} />
        <Route path="/buzohombre" element={<BuzoHombre />} />
        <Route path="/buzooscurohombre.html" element={<BuzoOscuroHombre />} />
        <Route path="/buzooscurohombre" element={<BuzoOscuroHombre />} />
        <Route path="/buzooversizemujer.html" element={<BuzoOversizeMujer />} />
        <Route path="/buzooversizemujer" element={<BuzoOversizeMujer />} />
        <Route path="/buzorosamujer.html" element={<BuzoRosaMujer />} />
        <Route path="/buzorosamujer" element={<BuzoRosaMujer />} />
        <Route path="/camisaprueba1.html" element={<CamisaPrueba1 />} />
        <Route path="/camisaprueba1" element={<CamisaPrueba1 />} />
        <Route path="/chaquetamujer.html" element={<ChaquetaMujer />} />
        <Route path="/chaquetamujer" element={<ChaquetaMujer />} />
        <Route path="/conjuntohombrebuzoysudadera.html" element={<ConjuntoHombreBuzoYSudadera />} />
        <Route path="/conjuntohombrebuzoysudadera" element={<ConjuntoHombreBuzoYSudadera />} />
        <Route path="/faldamujer.html" element={<FaldaMujer />} />
        <Route path="/faldamujer" element={<FaldaMujer />} />
        <Route path="/gafashombre.html" element={<GafasHombre />} />
        <Route path="/gafashombre" element={<GafasHombre />} />
        <Route path="/gorrablanca.html" element={<GorraBlanca />} />
        <Route path="/gorrablanca" element={<GorraBlanca />} />
        <Route path="/joggermujer.html" element={<JoggerMujer />} />
        <Route path="/joggermujer" element={<JoggerMujer />} />
        <Route path="/pantalonetacasual.html" element={<PantalonetaCasual />} />
        <Route path="/pantalonetacasual" element={<PantalonetaCasual />} />
        <Route path="/topblanco.html" element={<TopBlanco />} />
        <Route path="/topblanco" element={<TopBlanco />} />
        <Route path="/topmujerprueba.html" element={<TopMujerPrueba />} />
        <Route path="/topmujerprueba" element={<TopMujerPrueba />} />
        <Route path="/vestidodebaño.html" element={<VestidoDeBano />} />
        <Route path="/vestidodeba%C3%B1o.html" element={<VestidoDeBano />} />
        <Route path="/vestidodebano" element={<VestidoDeBano />} />
        <Route path="/zapatoshombre.html" element={<ZapatosHombre />} />
        <Route path="/zapatoshombre" element={<ZapatosHombre />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
