import './App.css';
import { ListaDeTareas } from './components/ListaDeTareas';


export const App = () => {



  return (


    <div className="app-tareas">

     <div className='tareas-lista-main'>
        <h1 className='titulo'> Mis tareas </h1>

        <ListaDeTareas />
     </div>
        
    </div>
  );
}

