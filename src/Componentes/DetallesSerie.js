import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class DetallesSerie extends Component {

    state={
        status:false,
        serie:{}
    }

    getSerie=()=>{
        var id =this.props.idserie;
        var request="/api/Series/"+id;
        var url=Global.urlPeliculas+request;

        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({status:true,serie:res.data})
        })

    }
    componentDidMount=()=>{
        this.getSerie();
    }
  render() {
    return (
      <div>
        <h1>Detalles Serie</h1>

        <img src={this.state.serie.imagen}/>
        <h1>{this.state.serie.nombre}</h1>
        <h1>IMDB:{this.state.serie.puntuacion}</h1>
        <NavLink to={"/personajes/"+this.state.serie.idSerie} className='btn btn-info'>Personajes</NavLink>
      </div>
    )
  }
}
