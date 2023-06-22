import React, { useEffect, useRef, useState } from "react";
import './productdetails.scss';
import { useParams } from "react-router-dom";
import Product from "../productList/Product/product";


const ProductDetails = ()=>{
    const [product, setProduct] = useState();
    let productId = useParams();
   

    useEffect(()=>{
       fetch(`http://localhost:3001/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        console.log(product);
      })
      .catch(error => {
        console.error('Error fetching initial state:', error);
      });
    }, [])
    return(
        <div className="product-view">
            Product View:
            <Product data={product}/>
            
        
        </div>
    )
}
export default ProductDetails;