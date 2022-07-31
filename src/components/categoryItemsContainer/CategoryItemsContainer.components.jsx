//dep
import React from 'react';

//style
import './CategoryItemsContainer.style.scss';

//components
import CategoryItem from '../categoryItem/CategoryItem.component';


const CategoryItemsContainer = ({items}) => {

  return (
    <div className='categoryItemsContainer-container'>
      {
        items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))
      }
    </div>
  );
};

export default CategoryItemsContainer;