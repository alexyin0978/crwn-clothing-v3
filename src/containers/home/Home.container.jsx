//dep
import React from 'react';

//components
import CategoryItemsContainer from '../../components/categoryItemsContainer/CategoryItemsContainer.components';

//tools
import { items } from '../../data/items.data';

const Home = () => {
  return (
    <CategoryItemsContainer items={items}/>
  );
};

export default Home;