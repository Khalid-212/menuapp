import React from 'react'
import FoodCard from "../../../Components/FoodCard/FoodCard";
import "./MenuTile.css";
import databsae from "../../../Assets/DB.json";
import Header from '../../../Components/Header/Header';
function MenuTile() {
    const db = databsae;
    console.log(db.map((item)=>{
      return item.name;
    }))
  const category = ["Burger","Pizza","Pasta","Sandwich","Wrap","Asian","Chicken","Beef","Fish","Vegitarian","Desert","Drinks"];
  return (
    <div className="menu">
      <Header/>
    {/* category chips */}
    <div className="categoryChips">
      {/* <div className="chip chipSelected">All</div> */}
      {category.map((category)=>{
        return(
          <div className="chip">{category}</div>
        )
      })}
    </div>
    <div className="menuWrapper">
      {db
        ? db.map((data) => {
            return (
              <FoodCard
                key={data.image}
                foodName={data.name}
                foodDescription={data.description}
                foodImage={data.picture}
                foodPrice={data.price}
              />
            );
          })
        : "getting data"}
      {/* {/* {databsae.map} */}
      {/* <FoodCard foodName={db[0].name}/> */}
    </div>
  </div>
);
}

export default MenuTile
