import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class ModificarPersonajesSeries extends Component {
    state={
        status:false,
        statusGetSeries:false,
        statusGetPersonajes:false,
        series:[],
        personajes:[]
    }
    cajaOpcionS=React.createRef();
    cajaOpcionP=React.createRef();
    ///api/Personajes/{idpersonaje}/{idserie}
    updateSeriesPersonajes=(e)=>{
        e.PreventDefault();
        var request="api/Personajes/"+this.cajaOpcionP.current.value+"/"+this.cajaOpcionS.current.value;
        var url=Global.urlPeliculas+request;

        axios.put(url).then(res=>{
            console.log(res.data);
            this.setState({statusGetSeries:true,series:res.data})
        })

    }
    getSeries=()=>{
        var request="/api/Series";
        var url=Global.urlPeliculas+request;

        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({statusGetSeries:true,series:res.data})
        })

    }

    componentDidMount=()=>{
        this.getSeries();
        this.getPersonajes();
    }
    getPersonajes=()=>{
        var request="/api/Personajes";
        var url=Global.urlPeliculas+request;

        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({statusGetPersonajes:true,personajes:res.data})
        })

    }
    
  render() {
    return (
      <div>
        <h1>Modificar Personajes Series</h1>

        <form className={'form-group'} onSubmit={this.updateSeriesPersonajes}>
            <label>Serie</label>
            <select ref={this.cajaOpcionS}>
                {
                    // this.state.statusGet==true&&
                    this.state.series.map((serie,index)=>{
                        return(
                            <option key={serie.idSerie}>{serie.idSerie}</option>
                        )
                    })
                }
            </select><br/>
            <label>Personaje</label>
            <select ref={this.cajaOpcionP}>
                {
                    // this.state.statusGet==true&&
                    this.state.personajes.map((personaje,index)=>{
                        return(
                            <option key={personaje.idPersonaje}>{personaje.idPersonaje}</option>
                        )
                    })
                }
            </select><br/>
            <button>Guardar Cambios</button>
        </form> 
      </div>
    )
  }
}
