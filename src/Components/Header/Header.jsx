import React from 'react'
import "./Header.css"

function Header({pageTitle}) {
  return (
    <div className='header'>
        <img
      className="logo center"
      src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1380&t=st=1690573395~exp=1690573995~hmac=042b9595dafa21852ab92432e21bae2f16e1a042296f520348f483f1ec3527c7"
      alt=""
    />
    <div className="center title">{pageTitle}</div>
    </div>
  )
}

export default Header
