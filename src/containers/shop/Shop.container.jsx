//hooks
import React, { useContext, useEffect, Fragment } from 'react';

//components
import ProductsPreview from '../../components/productsPreview/ProductsPreview.component';

//context
import { ProductsContext } from '../../contexts/Products.context';

//style
import './Shop.styles.scss';



const Shop = () => {

  const { categoriesMap, isLoading } = useContext(ProductsContext);

  return (
    <>
      {
        !isLoading ? (
          <div className='shop-container'>
            {
              Object.keys(categoriesMap).map(title => {
                const categoryItemsArr = categoriesMap[title];
                  return <ProductsPreview 
                  key={title} 
                  items={categoryItemsArr} 
                  title={title} />    
              })
            }
          </div>
        ) : 'loading'
      }
    </>
  );
};

export default Shop;