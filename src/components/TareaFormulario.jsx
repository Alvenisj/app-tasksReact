
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../stylesSheet/TareaFormulario.css';


export const TareaFormulario = ( props ) => {


    const [input, setInput] = useState('')

    const handleInput = ( { target } ) => {

        setInput( target.value );
       
    };

    const handleEnvioSubmit = ( e ) => {
      e.preventDefault();

      const tareNew = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit( tareNew );

    };

  return (

    <form 
    onSubmit={ handleEnvioSubmit }
    className="tarea-formulario">

        <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={ handleInput }

        />

        <button 
          className='tarea-btn'
          
        >
            Agregar tarea
         </button>

    </form>
    
  )
}
