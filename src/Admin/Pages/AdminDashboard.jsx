import React, { useState, useEffect } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import "./AdminDashboard.css";
import {
  addMenuItem,
  getMenuItems,
  removeMenuItem,
  updateMenuItem,
} from "../../supabase";
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { Link } from "react-scroll";
import copy from "../../Assets/copy.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminDashboard() {
  const [foodData, setFoodData] = useState([]);
  const [currentFood, setCurrentFood] = useState({
    name: "",
    price: 0,
    picture: "",
    description: "",
    category: "",
  });
  const currentUser = useSelector((state) => state.user.user);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(-1);

  console.log("food", currentUser);
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const fetchedMenuItems = await getMenuItems(currentUser);
        setFoodData(fetchedMenuItems);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, [currentUser]);

  const handleAddFood = async () => {
    console.log("Current Food:", currentFood);
    await addMenuItem({
      restaurant_id: currentUser,
      name: currentFood.name,
      description: currentFood.description,
      price: currentFood.price,
      image_url: currentFood.picture,
      category: currentFood.category,
    }).then((res) => {
      console.log(res);
    });
    setFoodData([...foodData, currentFood]);
    toast.success("Food Added Successfully");
  };

  const handleUpdateFood = async () => {
    try {
      const updatedFood = {
        id: currentFood.item_id, // Assuming you have an 'id' property for each food item
        name: currentFood.name,
        description: currentFood.description,
        price: currentFood.price,
        image_url: currentFood.picture,
        category: currentFood.category,
      };

      const updatedFoodData = foodData.map((food, index) =>
        index === currentFoodIndex ? updatedFood : food
      );
      console.log(updatedFood);

      await updateMenuItem(
        updatedFood.id,
        updatedFood.name,
        updatedFood.price,
        updatedFood.description,
        updatedFood.image_url,
        updatedFood.category
      );

      setFoodData(updatedFoodData);
      setCurrentFoodIndex(-1);
      toast.success("Food Updated Successfully");
    } catch (error) {
      toast.error("Error updating food");
    }
  };

  const handleDeleteFood = async (foodIndex) => {
    const updatedFoodData = foodData.filter((_, index) => index !== foodIndex);
    // print the removed item to the console
    console.log("removed", foodData[foodIndex]);
    await removeMenuItem(foodData[foodIndex].item_id).then((res) => {
      console.log(res);
    });
    setFoodData(updatedFoodData);
    toast.success("Food Deleted Successfully");
  };

  const url = window.location.href.split("/admin")[0];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <Header pageTitle={"Admin"} />
      <div className="restaurant-link">
        your menu link
        <p>{`${url}/menu/${currentUser}`}</p>
        <div class="tooltip">
          <a href={`/menu/${currentUser}`}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/visible.png"
              alt="show menu"
            />
          </a>
          <span class="tooltiptext">view menu</span>
        </div>
        <div class="tooltip">
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${url}/menu/${currentUser}`);
              toast.success("coppied");
            }}
          >
            <img src={copy} alt="" />
            <span class="tooltiptext">copy</span>
          </button>
        </div>
      </div>
      <div className="admin-dashboard">
        <form className="food-form">
          {/* Input fields for food properties */}
          <input
            type="text"
            placeholder="Food Name"
            value={currentFood.name}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, name: e.target.value })
            }
          />
          {/* Other input fields for price, image URL, description, and category */}
          {/* Buttons for adding/updating food */}
          <input
            type="number"
            placeholder="Price"
            value={currentFood.price}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={currentFood.picture}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, picture: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            value={currentFood.description}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Category"
            value={currentFood.category}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, category: e.target.value })
            }
          />
          <button type="button" onClick={handleAddFood}>
            Add Food
          </button>
          <br />
          <button type="button" onClick={handleUpdateFood}>
            Update Food
          </button>
        </form>
        <div className="food-list">
          {foodData.length > 0 ? (
            foodData.map((food, index) => (
              <div className="cards" key={index}>
                <FoodCard
                  key={food.id}
                  foodName={food.name}
                  foodDescription={food.description}
                  foodImage={food.image_url}
                  foodPrice={food.price}
                />
                <div className="food-actions">
                  <Link
                    activeClass="Home"
                    to="food-form"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button onClick={() => setCurrentFood(food)}>Edit</button>
                  </Link>
                  <button onClick={() => handleDeleteFood(index)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
