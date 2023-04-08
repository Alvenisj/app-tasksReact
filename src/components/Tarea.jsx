import '../stylesSheet/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'


export const Tarea = ( { id, texto, completada, completarTarea, eliminarTarea  } ) => {




  // const eliminarTarea = () => {


  // };

  return (

    <div className={ completada ? 'tarea-container completada' : 'tarea-container' }>
        
        <div 
        className="tarea-texto"
        onClick={ () => completarTarea( id ) }
        >
            { texto }
        </div>
        <div 
        className="tarea-container-iconos"
        onClick={ () => eliminarTarea( id )}
        >
            <AiOutlineCloseCircle className='tarea-icono' />
        </div>

    </div>

  
  )
}
