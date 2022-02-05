import React, {useState}from 'react';

const componenteUno = () => {
    return (
        <>
            Hola mundo
        </>
      );
}

const usuarios = () => {
    return (
        <>
            Hola mundo 2
        </>
      );
}

const Condicional = () => {
  
  const [mostrarUsuarios, setMostrarUsuarios] = useState(true);

  return (
    <>
        { mostrarUsuarios ? usuarios : componenteUno  }
    </>
  );
}

export default Condicional;
