//hooks
import React, { useContext, useEffect, Fragment } from 'react';

//context
import { ProductsContext } from '../../contexts/Products.context';

//component
import ProductCard from '../../components/productCard/ProductCard.component';

//style
import './Shop.styles.scss';



const Shop = () => {

  const { categoriesMap, isLoading } = useContext(ProductsContext);

  return (
    <>
      {
        !isLoading ? (
          <>
            {
              Object.keys(categoriesMap).map(title => (
                <Fragment key={title}>
                  <h2>{title.toUpperCase()}</h2>
                  <div className='products-container'>
                    {
                      categoriesMap[title].map(item => (
                        <ProductCard key={item.id} item={item} />
                      ))
                    }
                  </div>
                </Fragment>
              ))
            }
          </>
        ) : 'loading'
      }
    </>
  );
};

export default Shop;