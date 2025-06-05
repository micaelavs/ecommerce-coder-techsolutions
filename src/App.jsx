import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import InfoCards from './componentes/InfoCards';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenidos a Tech Solutions!" />
      <InfoCards />
    </>
  );
}

export default App;
