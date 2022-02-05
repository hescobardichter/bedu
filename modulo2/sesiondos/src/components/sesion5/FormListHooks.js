import React, {useState}from 'react';
import NombreHooks from './NombreHooks';

const FormListHooks = () => {

  const [nombre, setNombre] = useState('');
  const [listaNombres, setListaNombres] = useState(['Bedu']);
  
  const handleNombre = (e) => {
    setNombre(e.target.value);
  }


  const handleDelete = (key) => {
    const lista = [...listaNombres]
    lista.splice(key, 1)
    setListaNombres(lista)
  }

  const handleClick = (e) => {
    if(!nombre)
      return;
    const listaActualizada = {
      ...listaNombres,
      nombre
    }
    setNombre('')
    setListaNombres(listaActualizada)
  }

  const didUpdate = () => {
    set
  }

  return (
    <div className="form">
        <input type="text" onChange={handleNombre} />
        <button onClick={handleClick}>Agregar Nombre</button>
        <ul>
          {listaNombres.map((item, key) => 
            <NombreHooks nombre={item} handleDelete={ () => {handleDelete(key)} } />
          )}
        </ul>
    </div>
  );
}

export default FormListHooks;
