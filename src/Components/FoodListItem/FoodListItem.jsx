import React from 'react'
import "./FoodListItem.css"

function FoodListItem({fooddescription,foodname,foodprice}) {
  return (
    <div className='FoodListItem'>
      <div className="foodNameList">
        {foodname}
      </div>
      <div className="foodDescriptionList">
        {fooddescription}
      </div>
      <div className="foodPriceList">
        {foodprice}
      </div>
    </div>
  )
}

export default FoodListItem
