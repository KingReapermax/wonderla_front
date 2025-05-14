import React from "react";

const categories = [
  { key: "land", label: "Land" },
  { key: "water", label: "Water" },
  { key: "kids", label: "Kids" },
];

const CategorySidebar = ({ selectedCategory, onSelectCategory }) => (
  <aside className="flex flex-col gap-6 mr-10">
    {categories.map((cat) => (
      <button
        key={cat.key}
        className={`px-8 py-3 rounded-full text-lg font-bold transition
          ${selectedCategory === cat.key
            ? "bg-yellow-400 text-[#1a237e] shadow-lg"
            : "bg-white bg-opacity-10 text-white hover:bg-yellow-400 hover:text-[#1a237e]"}
        `}
        onClick={() => onSelectCategory(cat.key)}
      >
        {cat.label}
      </button>
    ))}
  </aside>
);


export default CategorySidebar;
