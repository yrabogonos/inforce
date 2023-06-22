import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './Components/productList/productList';
import { useState } from 'react';
import ModalWindow from './Components/Modal/modal';

function App() {
  const [modalActive, SetModalActive] = useState(true);
  const [modalMode, SetModalMode] = useState('');

  return (
    <div className="App">
      <ProductList openModal = {SetModalActive} setMode = {SetModalMode} />
      <ModalWindow active = {modalActive} setActive= {SetModalActive} mode={modalMode} />
    
      
    </div>
  );
}

export default App;
