import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import InfoCards from './componentes/InfoCards';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './componentes/ErrorPage';
import { CartProvider } from './context/CartContext';
import CartContainer from './componentes/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        {/* <InfoCards /> */}
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="¡Bienvenidos a nuestro catálogo!"/>}/>
          <Route path='/category/:categoryId'  element={<ItemListContainer saludo='¡Los mejores productos, los encontrás acá!'/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
