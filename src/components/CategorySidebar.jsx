import React from "react";

const categories = [
  { key: "land", label: "Land" },
  { key: "water", label: "Water" },
  { key: "kids", label: "Kids" },
];

const CategorySidebar = ({ selectedCategory, onSelectCategory }) => (
  <aside className="flex flex-col gap-6 ml-20 z-30 bg-[#22304a]">
    {categories.map((cat) => (
      <button
        key={cat.key}
        className={`px-8 py-3 rounded-full text-lg font-bold transition
          ${selectedCategory === cat.key
            ? "bg-yellow-400 text-[#22304a] shadow-lg"
            : "bg-white text-[#22304a] hover:bg-yellow-400 hover:text-[#22304a]"}
        `}
        onClick={() => onSelectCategory(cat.key)}
      >
        {cat.label}
      </button>
    ))}
  </aside>
);


export default CategorySidebar;
