import React from 'react';
import ProductCard from './ProductCard';

const ProductItem = ({list}) => {
  return (
    <>
      {list.length > 0 &&
        list.map((item, index) => {
          return (
            <ProductCard
              id={item._id}
              image={item.image}
              title={item.title}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
    </>
  );
};

export default ProductItem;
