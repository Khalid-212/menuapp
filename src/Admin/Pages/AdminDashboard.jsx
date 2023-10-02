import React, { useState, useEffect } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import "./AdminDashboard.css";
import SyncLoader from "react-spinners/ClipLoader";
import {
  addMenuItem,
  addQRCodeOrder,
  getMenuItems,
  getRestaurantById,
  removeMenuItem,
  updateMenuItem,
} from "../../supabase";
import { StorageClient } from '@supabase/storage-js'
import { useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { Link } from "react-scroll";
import copy from "../../Assets/copy.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUpload from "../../Components/FileUpload/FileUpload";
import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

function AdminDashboard() {
  const [foodData, setFoodData] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [QrCodeRequest, setQrCodeRequest] = useState(false);
  const requestQrCode = () => {
    if (foodData.length > 0) {
      addQRCodeOrder(currentUser, restaurant.name).then((res) => {
        console.log(res);
        // setQrCodeRequest(true);
        toast.success("QR Code Requested Successfully");
      });
    } else {
      toast.error("Please add some food first");
    }
  };
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFileToStorage = async () => {
    try {
      if (!file) {
        toast.error("Please select an image file.");
        return;
      }

      const fileName = `menu_images/${uuidv4()}_${file.name}`;


      const { data, error } = await StorageClient
      .from(currentUser)
      .upload(fileName, file);

    if (error) {
      toast.error("Error uploading the image.");
      return null;
    }

    const imageUrl = data.Key;

    return imageUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    toast.error("Error uploading file.");
    return null;
  }
};

  const [currentFood, setCurrentFood] = useState({
    name: "",
    price: 0,
    picture: "",
    description: "",
    category: "",
  });
  const currentUser = useSelector((state) => state.user.user);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(-1);

  // console.log("food", currentUser);
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
    try {
      const imageUrl = await uploadFileToStorage(); // Upload the image

      if (!imageUrl) {
        return; // Exit if there was an error with file upload
      }

      // Add the menu item with the image URL to the database
      await addMenuItem({
        restaurant_id: currentUser,
        name: currentFood.name,
        description: currentFood.description,
        price: currentFood.price,
        image_url: imageUrl, // Use the uploaded image URL
        category: currentFood.category,
      });

      setFoodData([...foodData, currentFood]);
      toast.success("Food Added Successfully");
    } catch (error) {
      console.error("Error adding food:", error);
      toast.error("Error adding food.");
    }
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
    console.log("removed", foodData[foodIndex]);
    await removeMenuItem(foodData[foodIndex].item_id).then((res) => {
      console.log(res);
    });
    setFoodData(updatedFoodData);
    toast.success("Food Deleted Successfully");
  };

  const url = window.location.href.split("/admin")[0];
  const categories = [
    "Burgers & Sandwiches",
    "Pizzas",
    "Pastas",
    "Desserts",
    "Seafood",
    "Salads",
    "Drinks",
    "Habesha Dishes",
  ];

  const [restaurant, setRestaurant] = useState(null);

  const getRestaurantByInfo = async () => {
    await getRestaurantById(currentUser).then((res) => {
      console.log(res);
      setRestaurant(res);
    });
  };

  useEffect(() => {
    getRestaurantByInfo();
  }, []);

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
      <Header pageTitle={restaurant ? restaurant.name : "Admin"} />

      <div className="restaurant-link">
        your menu link
        <p>{`${url}/menu/${currentUser}`}</p>
        <div class="tooltip">
          <a href={`/menu/${currentUser}`} target="_blank">
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
      <div className="qrcode-request">
        {/* request qr code form */}
        <div className="request-form">
          <form>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                requestQrCode();
              }}
            >
              Request Qr Code
            </button>
          </form>
        </div>
        {/*  */}
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
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br />
          <textarea
            placeholder="Description"
            value={currentFood.description}
            onChange={(e) =>
              setCurrentFood({ ...currentFood, description: e.target.value })
            }
          />
          <select
            value={currentFood.category}
            required
            onChange={(e) =>
              setCurrentFood({ ...currentFood, category: e.target.value })
            }
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <br />
          {isEditMode ? (
            <p></p>
          ) : (
            <button
              type="submit"
              onClick={handleAddFood}
              // disabled={!isFormComplete}
              // className={`form-button ${!isFormComplete ? "disabled" : ""}`}
            >
              Add Food
            </button>
          )}
          <br />
          {isEditMode && (
            <button
              type="submit"
              onClick={handleUpdateFood}
              // disabled={!isFormComplete}
              // className={`form-button ${!isFormComplete ? "disabled" : ""}`}
            >
              Update Food
            </button>
          )}
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
                    <button
                      onClick={() => {
                        setCurrentFood(food);
                        setIsEditMode(true);
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                  {isEditMode ? (
                    <p></p>
                  ) : (
                    <button onClick={() => handleDeleteFood(index)}>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <SyncLoader />
          )}
        </div>
      </div>
      {/* <div className="qrcode-request">
        <FileUpload onUpload={handleOnUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return <button onClick={handleOnClick}>Upload file</button>;
          }}
        </FileUpload>
      </div> */}
    </>
  );
}

export default AdminDashboard;
