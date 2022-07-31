//dep
import React from 'react';

//style
import './CategoryItem.style.scss';

const CategoryItem = ({item}) => {
  
  const { name, imageUrl } = item;

  return (
    <div className='category-container'>
      <div 
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      />
      <div className='body-container'>
        <h2>{name}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;