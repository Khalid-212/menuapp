import React from 'react'
import "./Header.css"
import logo from "../../assets/../Assets/logo.svg"

function Header({pageTitle}) {
  return (
    <div className='header'>
        <img
      className="logo center"
      src={logo}
      alt=""
    />
    <div className="center title">{pageTitle}</div>
    </div>
  )
}

export default Header
