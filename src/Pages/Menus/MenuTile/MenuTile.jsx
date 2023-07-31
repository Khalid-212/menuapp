import React, { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import "./MenuTile.css";
import database from "../../../Assets/DB.json";
import Header from "../../../Components/Header/Header";

function MenuTile() {
  const db = database.menu;
  const [currentData, setCurrentData] = useState(db);
  const categories = [
    "All",
    "Burgers & Sandwiches",
    "Pizzas",
    "Pastas",
    "Desserts",
    "Seafood",
    "Salads",
    "Drinks",
  ];
  const [currentCategory, setCurrentCategory] = useState(
    "All"
  );

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setCurrentData(db);
    } else {
      setCurrentData(db.filter((data) => data.category === category));
    }
    setCurrentCategory(category);
  };

  return (
    <div className="menu">
      <Header pageTitle={"Menu"} />
      {/* category chips */}
      <div className="categoryChips">
        {categories.map((category) => (
          <div
            key={category}
            className={`chip ${
              currentCategory === category ? "chipSelected" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="menuWrapperTile">
        {currentData.length > 0 ? (
          currentData.map((data) => (
            <FoodCard
              key={data.image}
              foodName={data.name}
              foodDescription={data.description}
              foodImage={data.picture}
              foodPrice={data.price}
            />
          ))
        ) : (
          <p>No items found for the selected category.</p>
        )}
      </div>
    </div>
  );
}

export default MenuTile;
