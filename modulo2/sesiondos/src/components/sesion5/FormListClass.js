import React, {Component} from "react";
import Nombre from './Nombre'

class FormListClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '', 
      mensaje: '',
      listaNombres: ['Bedu']
    }
  }

  handleChange = (e) => {
    this.setState({ nombre: e.target.value })
  }

  handleClick = (e) => {
    const nombre = this.state.nombre
    if(!nombre)
      return;
    
    const listaActualizada = {
      ...this.state.listaNombres,
      nombre
    }
    
    this.setState({ nombre: '', listaNombres: listaActualizada })
  }

  borrarNombreDeLaLista = (key) => {
    const lista = [...this.state.listaNombres]
    lista.splice(key, 1)
    this.setState({ listaNombres: lista })
  }

  render() {
    return (
      <div>
        <input
           value={this.state.nombre} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Agregar</button>
        <ul>
          {this.state.listaNombres.map((item, key) =>
            <li key={key}>
              <Nombre 
                nombre={item} 
                handleDelete={ () => this.borrarNombreDeLaLista(key) } />
            </li>
          )}
        </ul>
      </div>
    )
  }

}

export default FormListClass;