//hooks
import React, { useContext, useEffect } from 'react';

//context
import { ProductsContext } from '../../contexts/Products.context';

//component
import ProductCard from '../../components/productCard/ProductCard.component';

//style
import './Shop.styles.scss';



const Shop = () => {

  const { loading, items, GETShopItems } = useContext(ProductsContext);

  useEffect(() => {
    GETShopItems();
  }, []);

  return (
    <div className='products-container'>
      {
        !loading ? (
          items &&
          items.length !== 0 &&
          items.map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : 'loading items'
      }
    </div>
  );
};

export default Shop;