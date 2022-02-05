import React, { useEffect } from 'react';
const NombreHooks = (props) => {
  const { nombre, handleDelete } = props
  const didMount = () => { 
      console.log('Bienvenida '+nombre)
  }
  useEffect(didMount(), []);
  const willMount = () => { 
    return () => {
        console.log('Adios '+nombre)
    }
  }
  useEffect(willMount(), []);
  return (
    <div className="item">
        { nombre }
        <button onClick={handleDelete}>x</button>
    </div>
  );
}

export default NombreHooks;
