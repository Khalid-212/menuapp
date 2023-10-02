import React, { useEffect, useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import "./MenuTile.css";
import Header from "../../../Components/Header/Header";
import { Link, useParams } from "react-router-dom";
import { getMenuItems } from "../../../supabase";
import { BarLoader, SyncLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import {paying} from "../../../PaymentSlice";
// import { login } from "../../UserSlice";


function MenuTile() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
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
    "Habesha Dishes",
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
  console.log(filteredMenuItems);
  const dispatch = useDispatch();

  return (
    <div className="menu">
      <Header pageTitle={"Menu"} />
      <Link to="/payment">
      <button className="btnpay" onClick={
        () => {
          dispatch(paying("ispaying"));
          window.location.href = "/payment";
        }
      }>
        {"Pay >"}
      </button>
      </Link>
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
        {filteredMenuItems ? (
          filteredMenuItems.map((data, key) => (
            <FoodCard
              key={key}
              foodName={data.name}
              foodDescription={data.description}
              foodImage={data.image_url}
              foodPrice={data.price}
            />
          ))
        ) : (
          <BarLoader />
          // <p>No items found for the selected category.</p>
        )}
      </div>
    </div>
  );
}

export default MenuTile;
