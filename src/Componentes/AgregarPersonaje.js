import axios from 'axios';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { Component } from 'react'
import Global from '../Global';

export default class AgregarPersonaje extends Component {

    cajaOpcion=React.createRef();
    cajaId=React.createRef();
    cajaNombre=React.createRef();
    cajaImg=React.createRef();
    cajaIdPelicula=React.createRef();

    state={
        status:false,
        statusGet:false,
        series:[],
        
        
    }

    insertarPersonaje=(e)=>{
        e.preventDefault();
        var request="api/Personajes";
        var url=Global.urlPeliculas+request;

        var pelicula={
                idPersonaje:0,
                nombre: this.cajaNombre.current.value,
                imagen: this.cajaImg.current.value,
                idSerie: parseInt(this.cajaOpcion.current.key.value),
              
        }

        console.log(pelicula);

        axios.post(url,pelicula).then(res=>{
            
            this.setState({state:true})
        })
    }

    getSeries=()=>{
        var request="/api/Series";
        var url=Global.urlPeliculas+request;
        
        axios.get(url).then(res=>{
            console.log(res.data);
           
            this.setState({stateGet:true,series:res.data,})
        })

    }

    componentDidMount=()=>{
        this.getSeries();
    }
  render() {
    return (
      <div>
        <h1>Agregar Personaje</h1>

        <form className={'form-group'} onSubmit={this.insertarPersonaje}>
            <label>Nombre</label>
            <input type="text" ref={this.cajaNombre} className={'form-control'} />
            <label>Imagen</label>
            <input type="text" ref={this.cajaImg} className={'form-control'} />
            <label>Serie</label>
            <select ref={this.cajaOpcion}>
                {
                    // this.state.statusGet==true&&
                    this.state.series.map((serie,index)=>{
                        return(
                            <option key={serie.idSerie}>{serie.idSerie}</option>
                        )
                    })
                }
            </select><br/>
            <button>insertar Personaje</button>
        </form> 
      </div>
    )
  }
}
