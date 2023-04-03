import React, { useEffect, useState } from 'react';
import './Shop.css'
import ProductDisplayshow from '../../ProductDisplayshow/ProductDisplayshow';
import Cart from '../../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts]= useState([]);
   const [cart, setCart] =useState([]);
    useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[]);

   useEffect(()=>{
     const storedCart =getShoppingCart();
    const saveCart = [];
     //  step 1 get id
    for(const id in storedCart){
         
        // step 2 get the product find usinng by id
    const addedProduct = products.find(product=>product.id===id);
    console.log(addedProduct)
    // step 3 get quantity product
    if(addedProduct){
        const quantity = storedCart[id];
    addedProduct.quantity=quantity;
      saveCart.push(addedProduct)
    }
    }
    setCart(saveCart);
   },[products])

   const handleAddToCart = (product)=>{
    const newCart = [...cart,product];
    setCart(newCart);
    addToDb(product.id)
}
    return (
        <div className='shop-container'>
           <div className="products-container">
            {
                products.map(product=><ProductDisplayshow 
                    key={product.id}
                    product={product}
                    handleAddToCart={()=>handleAddToCart(product)}>

                    </ProductDisplayshow>)
            }
                        
            </div> 
            <div className="car-container">
               <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;