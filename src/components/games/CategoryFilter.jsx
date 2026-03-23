import React from 'react';

// Sample CATEGORIES data structure (you should replace this with your actual data)
const CATEGORIES = [
  { id: 1, label: 'Category 1', count: 10 },
  { id: 2, label: 'Category 2', count: 15 },
  { id: 3, label: 'Category 3', count: 20 },
  // Add more categories as needed
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className="category-filter">
      {CATEGORIES.map(category => (
        <button 
          key={category.id}
          className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.label} ({category.count})
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;