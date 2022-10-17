//hooks
import { useNavigate } from 'react-router-dom';

//component
import ProductCard from '../../components/productCard/ProductCard.component';

//style
import './ProductsPreview.styles.scss';



const ProductsPreview = ({items, title}) => {

  const navigate = useNavigate();

  const handleNavigateToProductPage = (title) => {
    navigate(`${title}`, {state: {productName: title}});
  };

  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title' onClick={() => handleNavigateToProductPage(title.toLowerCase())}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className='preview'>
        {
          items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};
 
export default ProductsPreview;