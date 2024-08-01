import './App.css';
import logotarea from './imagenes/logo-tarea.png'
import ListaDeTareas from './componentes/listaDeTareas.js';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-tarea-contenedor'>
        <img 
          src={logotarea}
          className='logo-tarea' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
