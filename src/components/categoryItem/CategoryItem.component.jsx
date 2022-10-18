//hook
import React from 'react';
import { useNavigate } from 'react-router-dom';

//style
import './CategoryItem.style.scss';

const CategoryItem = ({item}) => {
  
  const { name, url, route } = item;

  const navigate = useNavigate();

  const handleNavigateToProductPage = () => {
    navigate(route);
  };

  return (
    <div className='category-container' onClick={handleNavigateToProductPage}>
      <div 
      className='background-image'
      style={{
        backgroundImage: `url(${url})`,
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