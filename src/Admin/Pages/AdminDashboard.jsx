import React, { useState, useEffect } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import "./AdminDashboard.css";
import database from "../../Assets/DB.json";
import Header from "../../Components/Header/Header";

function AdminDashboard() {
  const [foodData, setFoodData] = useState([]);
  const [currentFood, setCurrentFood] = useState({
    name: "",
    price: 0,
    picture: "",
    description: "",
    category: "",
  });

  const [currentFoodIndex, setCurrentFoodIndex] = useState(-1); // Initialize with -1
  // Fetch data from JSON database on component mount
  useEffect(() => {
    setFoodData(database.menu);
  }, []);

  const handleAddFood = () => {
    // Add the currentFood object to the foodData array
    setFoodData([...foodData, currentFood]);
    // Clear the form fields after adding the food
    setCurrentFood({
      name: "",
      price: 0,
      picture: "",
      description: "",
      category: "",
    });
  };

  const handleUpdateFood = (foodIndex) => {
    // Create a copy of the foodData array
    const updatedFoodData = [...foodData];
    // Update the food at the specified index with the currentFood data
    updatedFoodData[foodIndex] = currentFood;
    // Set the updated foodData array
    setFoodData(updatedFoodData);
  };

  const handleDeleteFood = (foodIndex) => {
    // Filter out the food item at the specified index
    const updatedFoodData = foodData.filter((_, index) => index !== foodIndex);
    // Set the updated foodData array
    setFoodData(updatedFoodData);
  };

  return (
    <>
      <Header pageTitle={"Admin"} />
      <div className="admin-dashboard">
        {/* Form to add/update food */}
        <form className="food-form">
          <input
            type="text"
            placeholder="Food Name"
            value={currentFood.name}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, name: e.target.value })
            }
          />
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
          {/* Buttons for adding/updating food */}
          <button type="button" onClick={handleAddFood}>
            Add Food
          </button>
          <button
            type="button"
            onClick={() => handleUpdateFood(currentFoodIndex)}
          >
            Update Food
          </button>
        </form>
        {/* Display the list of food items */}
        <div className="food-list">
          {foodData.map((food, index) => (
            <>
            <div className="cards">

              <FoodCard
                key={index}
                foodName={food.name}
                foodDescription={food.description}
                foodImage={food.picture}
                foodPrice={food.price}
                />
              <div className="food-actions">
                <button onClick={() => setCurrentFood(food)}>Edit</button>
                <button onClick={() => handleDeleteFood(index)}>Delete</button>
              </div>
                </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
