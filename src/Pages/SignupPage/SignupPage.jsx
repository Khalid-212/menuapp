import React from "react";
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js"; // Import the Supabase client library
// import "./SignupPage.css";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_KEY
); // Replace with your Supabase URL and public key

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
  
      if (error) {
        console.error("Signup failed:", error.message);
      } else if (user) {
        console.log("Signup successful:", user);
  
        // Create an entry in the Restaurants table for the new user
        const { error: insertError } = await supabase
          .from("Restaurants")
          .insert([{ user_id: user.id }])
          .single();
  
        if (insertError) {
          console.error("Restaurant entry creation failed:", insertError.message);
        }
  
        // Redirect to login page or dashboard after successful signup
      }
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };
  

  return (
    <div className="SignupPage">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <input
          className="formInput"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          className="formInput"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <input className="btnSubmit" type="submit" />
      </form>
    </div>
  );
}

export default SignupPage;
