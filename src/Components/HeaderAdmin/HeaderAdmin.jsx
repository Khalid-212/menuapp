import React from "react";
import "./Header.css";
import logo from "../../assets/../Assets/logo.svg";
import { current } from "@reduxjs/toolkit";

function HeaderAdmin({ pageTitle }) {
  // check if current url contains admin
  const currentUrl = window.location.href;
  console.log(currentUrl);

  // check if current url is admin
  const isAdmin = currentUrl.includes("admin");
  console.log("yes" + isAdmin);

  return (
    <div className="header">
      <div
        className="logout"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </div>
      <img className="logo center" src={logo} alt="" />
      <div className="center title">{pageTitle}</div>
    </div>
  );
}

export default HeaderAdmin;
