import React from "react";
import "./MenuList.css";
import FoodListItem from "../../../Components/FoodListItem/FoodListItem";
import databsase from "../../../Assets/DB.json";
import Header from "../../../Components/Header/Header"

function MenuList() {
  const db = databsase;
  return (
    <div className="MenuList center">
      <Header/>
      {db.map((item) => {
        return (
          <FoodListItem
            fooddescription={item.description}
            foodname={item.name}
            foodprice={item.price}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
