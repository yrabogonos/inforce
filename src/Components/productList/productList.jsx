import React, { useEffect, useState } from 'react';
import './productList.scss';
import StoreContext from '../../StoreContext';

const ProductList = function (){
    const [productList, setProductList] = useState([]);
    const GetProducts = async() =>{
        fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data =>{
           setProductList(data);
        } )
        
        
    }
    useEffect(()=>{
       GetProducts();
    }, []);
    
    return(
       <StoreContext.Consumer>
        {
            (store) => {
               
                let state = store.getState();
                console.log(state);
                
                return(
                    <section className='productList'>
                        <div className="productlist-wrap">
                            <h2>Product List:</h2>
                            <div className="products-container">

                            </div>
                        </div>
                </section>
                );
            }
        }
       </StoreContext.Consumer>
    );
}

export default ProductList;