import React from 'react'
import './FoodCard.css'

function FoodCard({foodName, foodDescription, foodPrice, foodImage}) {
  return (
    <div className='foodCard'>
      <img src={foodImage} alt="food"/>
        <div className='foodNameTile'>{foodName}</div>
        <div className='foodDescriptionTile'>{foodDescription}</div>
        <div className='foodPriceTile'>{foodPrice + " ETB"}</div>
    </div>
  )
}

export default FoodCard
