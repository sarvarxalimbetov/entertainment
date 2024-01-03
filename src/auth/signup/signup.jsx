import React from "react";
import logo from "../../../public/assets/logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUp = (data) => {
    if (data.password === data.repeat_password) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ email: data.email, password: data.password })
      );
      navigate('/login')
    } else {
      alert("The confirm password is incorrect")
    }
  };

  return (
    <div className="auth">
      <img src={logo} alt="sign up logo" className="auth_logo" />
      <div className="auth_wrapper" style={{ height: "418px" }}>
        <h1 className="auth_title">Sign Up</h1>
        <form
          className="auth_form"
          style={{ height: "231px" }}
          onSubmit={handleSubmit(onSignUp)}
        >
          <label className="auth_label">
            <input
              type="text"
              className="auth_input"
              placeholder="Email address"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="auth_error">Can’t be empty</span>}
          </label>
          <label className="auth_label">
            <input
              type="text"
              className="auth_input"
              placeholder="Password"
              {...register("password", { required: "Can’t be empty" })}
            />
            {errors.password && (
              <span className="auth_error">{errors.password.message}</span>
            )}
          </label>
          <label className="auth_label">
            <input
              type="text"
              className="auth_input"
              placeholder="Repeat password"
              {...register("repeat_password", { required: "Can't be empty" })}
            />
            {errors.repeat_password && (
              <span className="auth_error">
                {errors.repeat_password.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="auth_submit"
            style={{ marginTop: "0" }}
          >
            Create an account
          </button>
        </form>
        <div className="auth_part">
          Already have an account?{" "}
          <Link className="auth_text" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
