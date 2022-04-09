
import './assets/css/App.css';
import Router from './Router';
import './assets/css/custom.css';

function App() {
  //Importamos bootstrap en la app principal para que se pueda usar en todo el proyecto
  //En app llamamos a Router donde están configuradas las urls de los controladores,
  //Va llamando a los diferentes controladores de la web
  return (
    <div className="container-fluid">
        <Router/>
    </div>
  );
}

export default App;
