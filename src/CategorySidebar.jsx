import React from 'react';

const CategorySidebar = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'land', name: 'Land Rides' },
    { id: 'water', name: 'Water Rides' },
    { id: 'kids', name: 'Kids Rides' }
  ];

  return (
    <div className="w-48 bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <button
              onClick={() => setActiveCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;