import { React, useEffect, useState } from "react";
import "./MenuList.css";
import FoodListItem from "../../../Components/FoodListItem/FoodListItem";
import database from "../../../Assets/DB.json";
import Header from "../../../Components/Header/Header";
import { getMenuItems } from "../../../supabase";
import { useParams } from "react-router-dom";

function MenuList() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Pizzas");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const fetchedMenuItems = await getMenuItems(id); // Use the URL param ID
        setMenuItems(fetchedMenuItems);
        setFilteredMenuItems(fetchedMenuItems); // Initialize filtered items
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, [id]);

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

  useEffect(() => {
    setFilteredMenuItems(menuItems); // Initialize with fetched menu items
  }, [menuItems]);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredMenuItems(menuItems);
    } else {
      setFilteredMenuItems(
        menuItems.filter((item) => item.category === category)
      );
    }
    setCurrentCategory(category);
  };
  return (
    <div className="MenuList center">
      <Header pageTitle={"Menu"} />
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
      <div className="menuWrapperList">
        {filteredMenuItems ? (
          filteredMenuItems.map((data) => (
            <FoodListItem
              key={data.image}
              foodName={data.name}
              foodDescription={data.description}
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

export default MenuList;
