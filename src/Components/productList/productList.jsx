import React, { useEffect, useState } from 'react';
import './productList.scss';
import StoreContext from '../../StoreContext';
import Product from './Product/product.jsx';


const ProductList = function (props){
    
    return(
       <StoreContext.Consumer>
        {
            (store) => {
               
                let state = store.getState();
                let products = state.products.products;
                console.log(products);
                
                return(
                    <section className='productList'>
                        <div className="productlist-wrap">
                            <h2 className='mb-4 text-center'>Product List:</h2>
                            <div className="product-ctrls d-flex flex-column">
                                <button className="add-product" onClick={()=>{
                                    props.openModal(true);
                                    props.setMode('Add');
                                }}>Add product</button>
                                <button className="del-product" onClick={()=>{
                                    props.openModal(true);
                                    props.setMode('Delete');
                                }}>Delete product</button>
                            </div>
                            <div className="products-container d-flex">
                                
                                {products.map(product => <Product data={product}/>)}
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