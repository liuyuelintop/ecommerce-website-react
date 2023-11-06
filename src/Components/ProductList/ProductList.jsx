import React from 'react';
import all_product from "../Assets/all_product";
import Item from '../Item/Item'; 
import "./ProductList.css"; 

const ProductList = () => {
  return (
    <div className='product-list'>
      <div className="popular-item">
        {all_product.map((product) => (
          <Item 
            key={product.id} 
            id={product.id} 
            name={product.name} 
            image={product.image} 
            new_price={product.new_price} 
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
