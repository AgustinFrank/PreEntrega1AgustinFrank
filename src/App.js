import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element = {<ItemListContainer/>} />
        <Route path='/detail/:productId' element = {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
