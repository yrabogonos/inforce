import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './Components/productList/productList';
import { useState } from 'react';
import ModalWindow from './Components/Modal/modal';

function App() {
  const [modalActive, SetModalActive] = useState(true);
  const [modalMode, SetModalMode] = useState('');
  const [refresh, SetRefresh] = useState(false);
  return (
    <div className="App">
      <ProductList openModal = {SetModalActive} setMode = {SetModalMode} />
      <ModalWindow refresh= {refresh} SetRefresh = {SetRefresh} active = {modalActive} setActive= {SetModalActive} mode={modalMode} />
    
      
    </div>
  );
}

export default App;
