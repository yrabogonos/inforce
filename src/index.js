import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './StoreContext';
import store from './Redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
let rerenderDom = () =>{
    root.render(
        // <BrowserRouter basename='/inforce'> 
            <Provider store={store}>
                <App />
            </Provider>
        // </BrowserRouter>
    
    );
}
rerenderDom(store.getState());
store.subscribe(() => {
    rerenderDom();
});
