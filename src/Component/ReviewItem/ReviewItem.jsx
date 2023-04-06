import React from 'react';
import './ReviewItem.css'
import { BeakerIcon, BellAlertIcon, TrashIcon } from '@heroicons/react/24/solid'


const ReviewItem = ({product,handleRemoveFromCart}) => {
    console.log(product)
    const {category,name,shipping,seller,price,img,rating,id,quantity} =product;
    
    return (
        <div className='review-item'>
            <div className='img'>
                <img src={img} alt="" className=''/>
            </div>
            <div className='details-container'>
                <div className='details'>
                    <p style={{fontWeight:'bold'}}>{category}</p>
                    <p>Quantity:$ <span style={{color:'red',fontSize:'20px'}}>{quantity}</span> </p>
                    <p>Shipping: <span style={{color:'red',fontSize:'20px'}}>{shipping}</span> </p>
                </div>
                <div className='delet-icon'>
                <button onClick={()=>handleRemoveFromCart(id)} className='delet-btn' ><TrashIcon className="hero-icon" /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;