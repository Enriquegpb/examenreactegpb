import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global';

export default class Personajes extends Component {

    state={
        status:false,
        personajes:{}
    }

    getPersonajes=()=>{
        var id =this.props.idpersonaje;
        var request="/api/Series/PersonajesSerie/"+id;
        var url=Global.urlPeliculas+request;

        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({status:true,personajes:res.data})
        })

    }
    componentDidMount=()=>{
        this.getPersonajes();
    }
  render() {
    return (
      <div>
        <h1>Personajes</h1>
        <NavLink className={"btn btn-danger"} to={"/detalleserie/"+this.props.idpersonaje}>Volver</NavLink>
        <table>
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status==true&&
                    this.state.personajes.map((personaje,index)=>{
                        return(
                            <tr key={personaje.idPersonaje}>
                                <td>{personaje.nombre}</td>
                                <td><img src={personaje.imagen}/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
