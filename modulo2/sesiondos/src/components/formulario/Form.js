import React, {useState}from 'react';
import Input from './Input'

const Form = () => {

  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    apellido2: '',
  });
  

  const editarState = (atributo) => (e) => {
    setState({
      ...state,
      [atributo]: e.target.value
    })
  }

  return (
    <div className="formulario">
        <Input type='text' handleAction={editarState('nombre')} />
        <Input type='text' handleAction={editarState('apellido')} />
        <Input type='text' handleAction={editarState('apellido2')} />
        <span>Mi nombre es:</span>
        <div>{state.nombre} {state.apellido} {state.apellido2}</div>
    </div>
  );
}

export default Form;
