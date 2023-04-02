import React from 'react';
import './ProductDisplayshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const ProductDisplayshow = (props) => {
      const {id,name,price,quantity,img,ratings,ratingsCount,seller,shipping}= props.product;
     const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
        
            <img src={img} alt="" />
            <div className='product-details'>
            <h4 className='product-name'>{name}</h4>
            
            <p>Price:${price}</p>
            <p>Manufacturer:{seller} </p>
            <p>Rate:{ratings}</p>
            <p>Ratecount:{ratingsCount} </p>
             <p>Quantitiy:{quantity}</p>
            </div>
            <button className='btn-cart' onClick={()=>handleAddToCart(handleAddToCart)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default ProductDisplayshow;