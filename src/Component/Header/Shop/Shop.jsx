import React, { useEffect, useState } from 'react';
import './Shop.css'
import ProductDisplayshow from '../../ProductDisplayshow/ProductDisplayshow';

const Shop = () => {
    const [products, setProducts]= useState([]);
   const [cart, setCart] =useState([]);

    useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])
   const handleAddToCart = (product)=>{
    const newCart = [...cart,product];
    setCart(newCart);
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
                <h4>Order summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;