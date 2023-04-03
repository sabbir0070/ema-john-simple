import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
       quantity = quantity + product.quantity
        
    }
    const tax = (totalPrice*7)/100;
    const grandTotal = totalPrice + totalShipping + tax; 
    // const {cart} = props;
    // console.log(props.cart.price)
    return (
        <div className='cart'>
            <h4>Order summary</h4>
                <p>Selected Items:{quantity}</p>
                <p>Total Price: ${totalPrice} </p> 
                <p>Total Shipping: ${totalShipping} </p>
                <p>Tax:${tax}</p>
                <h5>Grand Total: {grandTotal} </h5> 
        </div>
    );
};

export default Cart;