import React from 'react';
import './product.scss';
import StoreContext from '../../../StoreContext';
import { loadToDeleteActionCreator } from '../../../Redux/products_reducer';

const Product = function (props){

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    return(
                        <div className="product">
                            <div className="product-wrap">
                                <div className="product-container">
                                    <h4 className='text-center'>{props.data.name}</h4>
                                    <div className="product-img">
                                        <img src={props.data.imageUrl} alt="product-img" />
                                    </div>
                                    <p>Quantity: {props.data.count}</p>
                                    <div className="product-size">
                                        <p>Width: {props.data.size.width}cm</p>
                                        <p>Height: {props.data.size.height}cm</p>
                                    </div>
                                    <p>Weight: {props.data.Weight}</p>
                                    <button className='delete-btn' onClick={()=>{
                                       
                                         props.openModal(true);
                                         props.setMode('Delete');
                                         store.dispatch(loadToDeleteActionCreator(props.data.id))
                                         
                                    }}>Delete</button>
                                </div>
                                
                            </div>
                        </div>
                    );

                }
            }
        </StoreContext.Consumer>
    );

    
}

export default Product;