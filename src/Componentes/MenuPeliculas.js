import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class MenuPeliculas extends Component {

    state={
        status:false,
        series:[]
    }

    getSeries=()=>{
        var request="/api/Series";
        var url=Global.urlPeliculas+request;

        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({status:true,series:res.data})
        })

    }
    componentDidMount=()=>{
        this.getSeries();
    }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">Stranger Things</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/agregarpersonaje">Nuevo Personaje</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/modificarpersonajeseries">Modificar Personaje</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Series
                </a>
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  {
                    this.state.status==true&&
                    this.state.series.map((serie,index)=>{
                        return(
                            <li key={serie.idSerie}><NavLink className="dropdown-item" to={"/detalleserie/"+serie.idSerie}>{serie.nombre}</NavLink></li>
                        )
                    })
                  }
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    )
  }
}
