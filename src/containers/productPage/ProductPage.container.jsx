//hooks
import { useParams, Navigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

//contexts
import { ProductsContext } from "../../contexts/Products.context";

//component
import ProductCard from "../../components/productCard/ProductCard.component";

//styles
import './ProductPage.styles.scss';



const ProductPage = () => {

  const { categoriesMap } = useContext(ProductsContext);

  let { productName } = useParams();

  const [productArr, setProductArr] = useState([]);

  //only reset/rerender productArr&productCard if categoriesMap or productName change
  useEffect(() => {
    setProductArr(categoriesMap[productName]);
  }, [categoriesMap, productName]);

  //navigate to "Shop" if param doesn't exist as an product
  if(categoriesMap && Object.keys(categoriesMap).indexOf(productName) === -1){
    return (
      <Navigate to='/shop' replace />
    );
  }

  return (
    <>
      <h2 className="product-title">
        {productName.toUpperCase()}
      </h2>
      <div className="product-page-container">
        {
          productArr &&
          productArr !== null &&
          productArr !== undefined &&
          productArr.length !== 0 && 
          productArr.map(product => (
            <ProductCard key={product.id} item={product} />
          ))
        }
      </div>
    </>
  );
};
 
export default ProductPage;