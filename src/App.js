import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './Components/productList/productList';
import { useState } from 'react';
import ModalWindow from './Components/Modal/modal';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/productdetails';


function App() {
  const [modalActive, SetModalActive] = useState(true);
  const [modalMode, SetModalMode] = useState('');

  return (
    <div className="App">
     
      <Routes>
        
      <Route path='/' element={ 
            <>
             <ProductList openModal = {SetModalActive} setMode = {SetModalMode} />
             <ModalWindow active = {modalActive} setActive= {SetModalActive} mode={modalMode} />
            </>
          }></Route> 
        
      <Route path='/:productId' element={ 
            <>
              <ProductDetails />
            </>
        }></Route> 

      </Routes>
    
      
    </div>
  );
}

export default App;
