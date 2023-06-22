import React from 'react';
import './product.scss';

const Product = function (props){

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
                    <p>Weight: {props.data.weight}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;