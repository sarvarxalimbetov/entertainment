import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../public/assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../auth.css";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [checkError, setCheckError] = React.useState(true);
  const [registerError, setRegisterError] = React.useState(true);
  const verificationValue = JSON.parse(localStorage.getItem("auth")) || null;

  const onLogin = (data) => {
    if (verificationValue === null) {
      setRegisterError(false);
    } else if (
      verificationValue.email === data.email &&
      verificationValue.password === data.password
    ) {
      localStorage.setItem("token", JSON.stringify("true"));
      navigate("/bookmarked");
      setCheckError(true);
      setRegisterError(true);
      reset();
      return;
    } else {
      setCheckError(false);
    }
  };

  return (
    <div className="auth">
      <img src={logo} alt="login logo icon" className="auth_logo" />
      <div className="auth_wrapper">
        <h1 className="auth_title">Login</h1>
        <form className="auth_form" onSubmit={handleSubmit(onLogin)}>
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
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="auth_error">Can’t be empty</span>
            )}
          </label>
          {checkError ? (
            ""
          ) : (
            <span className="auth_incorrect">Email or password incorrect</span>
          )}

          {registerError ? (
            ""
          ) : (
            <span className="auth_incorrect">You have not registered yet</span>
          )}

          <button type="submit" className="auth_submit">
            Login to your account
          </button>
        </form>
        <span className="auth_part">
          Don't have an account?{" "}
          <Link className="auth_text" to="/signup">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
