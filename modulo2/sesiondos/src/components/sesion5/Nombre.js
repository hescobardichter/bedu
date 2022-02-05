import React, {Component} from "react";

class Nombre extends Component {

  componentDidMount(){
    alert('te damos la bienvenida ' + this.props.nombre)
  }

  componentWillUnmount(){
    alert('Adios')
  }

  render() {
    return (
      <div>
        {this.props.nombre}
        <button onClick={this.handleDelete}>x</button>
      </div>
    )
  }

}

export default Nombre;