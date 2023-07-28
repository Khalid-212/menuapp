import React from 'react'
import './FoodCard.css'

function FoodCard({foodName, foodDescription, foodPrice, foodImage}) {
  return (
    <div className='foodCard'>
      <img src={foodImage} alt="food"/>
        <div className='foodName'>{foodName}</div>
        <div className='foodDescription'>{foodDescription}</div>
        <div className='foodPrice'>{foodPrice + " ETB"}</div>
    </div>
  )
}

export default FoodCard
