import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarPersonaje from './Componentes/AgregarPersonaje';
import DetallesSerie from './Componentes/DetallesSerie';
import MenuPeliculas from './Componentes/MenuPeliculas';
import ModificarPersonajesSeries from './Componentes/ModificarPersonajesSeries';
import { useParams } from 'react-router-dom';
import Personajes from './Componentes/Personajes';
export default class Router extends Component {
  render() {
    function DetallesSerieElement() {
      
      var { idserie } = useParams();
      
      return <DetallesSerie idserie={idserie}/>
    }
    function DetallesPersonajeElement() {
      
      var { idpersonaje } = useParams();
      
      return <Personajes idpersonaje={idpersonaje}/>
    }
    return (
        <BrowserRouter>
        <MenuPeliculas/>
        <Routes>
            <Route path="/agregarpersonaje" element={<AgregarPersonaje/>}/>
            <Route path="/modificarpersonajeseries" element={<ModificarPersonajesSeries/>}/>
            <Route path="/detalleserie/:idserie" element={<DetallesSerieElement/>}/>
            <Route path="/personajes/:idpersonaje" element={<DetallesPersonajeElement/>}/>
            
        </Routes>
    </BrowserRouter>

    )
  }
}
