import React from "react";

const Categories = ({ filterFood, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterFood(category)}
          >
            {category}
          </button>
        );
      })}
    </div> 
  );
};

export default Categories;
