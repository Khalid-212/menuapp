import { React, useState } from "react";
import "./MenuList.css";
import FoodListItem from "../../../Components/FoodListItem/FoodListItem";
import database from "../../../Assets/DB.json";
import Header from "../../../Components/Header/Header";

function MenuList() {
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
    "Burgers & Sandwiches"
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
    <div className="MenuList center">
      <Header />
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
      <div className="menuWrapper">
      {currentData.map((item) => {
        return (
          <FoodListItem
          fooddescription={item.description}
          foodname={item.name}
          foodprice={item.price +" ETB"}
          />
          );
        })}
    </div>
        </div>
  );
}

export default MenuList;
