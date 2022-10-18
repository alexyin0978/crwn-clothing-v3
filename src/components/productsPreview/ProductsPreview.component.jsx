//hooks
import { Link } from 'react-router-dom';

//component
import ProductCard from '../../components/productCard/ProductCard.component';

//style
import './ProductsPreview.styles.scss';



const ProductsPreview = ({items, title}) => {

  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={`${title}`}>
          {title.toUpperCase()}
        </Link>
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