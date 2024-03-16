import React, { useState } from 'react';
import "./categories.css"
const Categories = ({ handleFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleClick = (category) => {
    setActiveCategory(category);
    handleFilterChange(category);
  };

  return (
    <div className="filter-buttons">
      <button className={activeCategory === 'All' ? 'active' : ''} onClick={() => handleClick('All')}>All</button>
      <button className={activeCategory === 'Tablet' ? 'active' : ''} onClick={() => handleClick('Tablet')}>Tablet</button>
      <button className={activeCategory === 'Phone' ? 'active' : ''} onClick={() => handleClick('Phone')}>Phone</button>
      <button className={activeCategory === 'Laptop' ? 'active' : ''} onClick={() => handleClick('Laptop')}>Laptop</button>
      <button className={activeCategory === 'Computer' ? 'active' : ''} onClick={() => handleClick('Computer')}>Computer</button>
    </div>
  );
}

export default Categories;
