import React, {useState}from 'react';
import Boton from "./Boton";

const Contador = () => {

  const [contador, setContador] = useState(0);
  
  const handleClick = (value) => {
    setContador(contador + value);
  }

  return (
    <div className="contador">
        <div>Contador = {contador}</div>
        <Boton handleClick={() => { handleClick(1) }} text="Aumentar" />
        <Boton handleClick={() => { handleClick(-1) }} text="Restar" />
    </div>
  );
}

export default Contador;
