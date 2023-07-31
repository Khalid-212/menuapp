import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login, selectUser } from "../../UserSlice";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="LoginPage">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input
          className="formInput"
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        <input
          className="formInput"
          type="password"
          placeholder="password"
          {...register("password", {})}
        />

        <input className="btnSubmit" type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
