import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../UserSlice";
import { createClient } from "@supabase/supabase-js"; // Import the Supabase client library
import "./LoginPage.css";
import { getRestaurant } from "../../supabase";
import logo from "../../assets/../Assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_KEY
);

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await getRestaurant(data.username, data.password).then((res) => {
      if (res) {
        dispatch(login(res.restaurant_id));
        navigate("/admin");
      } else {
        // alert("Invalid username or password");
        toast.error("Invalid username or password");
      }
    });
  };
  errors && console.log(errors);

  return (
    <div className="LoginPage">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <img className="login_logo" src={logo} alt="" />
        <h1>Menu Plus Login</h1>
        <input
          className="formInput"
          type="text"
          placeholder="username"
          required
          {...register("username", { required: true })}
        />
        <input
          className="formInput"
          type="password"
          placeholder="password"
          required
          {...register("password", { required: true })}
        />

        <input
          className="btnSubmit"
          type="submit"
          placeholder="Login"
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginPage;
